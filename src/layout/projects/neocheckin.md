---
title: neocheckin
description: Tjek-ind system der erstatter PraktikCenter Viborg's gamle tjek-ind system. Artikel under arbejde.
date: 2022-01-17
tags: ["project", "frontend", "backend", "flutter", "go", "docker"]
layout: article.njk
--- 

## Begyndelsen af neocheckin

For et par måneder siden valgte ledelsen ved PraktikCenter Viborg, at alle EUXerne burde formes sammen til deres eget hold, både fordi de mente at de ville kunne opnå et højere potentiale sammen, og da det så gav mere mening at alle så ville være på skole på samme tid, i forhold til da der var blandede EUD og EUX hold, hvor EUDerne var væk fra et par uger mens EUXerne var væk for et halvt år.

Jeg, som en EUXer, blev selvfølgelig en del af dette hold.

I første omgang fik EUXerne deres eget lokale på Praktikcenteret, da vi nu var et hold for sig selv, men så fik de også den idé, at EUXerne skulle flyttes endnu tættere på klienterne, til deres egen lokale i Investorhub Viborg.

Da vi var i en helt ny bygning, brugte vi i starten Skive afdelingens tjek-ind system ved at forbinde til deres VPN.

Vi fandt store problemer med det, da hvis der var problemer med VPNen, skulle vi skrive alle vores tjek-ind og ud tider, så de kunne rettes manuelt af ledelsen; derfor blev [Simon From Jakobsen](https://simonfromjakobsen.netlify.app/) og jeg sat til at skabe et nyt system.

Vi valgte at kalde den neocheckin, som egentligt bare er en flot måde at sige "nyt tjek ind system", med navneinspiration fra tekstredigeringsprogrammet [Neovim](https://neovim.io/), som jeg iøvrigt selv bruger til at skrive alt min kode.

## Opbygningen af neocheckin

### Opbygning

Neocheckin består af 3 lag, skrevet i 3 forskellige sprog:

* Wrapper: [TypeScript](https://www.typescriptlang.org/)
* Cache: [Go](https://go.dev)
* Frontend: [Dart/Flutter](https://flutter.dev)

Jeg har tegnet en netværksgraf der beskriver netværksopsætningen:

![en graf, der viser de 3 lag af neocheckin: wrapper, lokal cache, frontend, samt instrukdb](/images/neocheckin/setup-solo.png)

Vi har selv skrevet wrapperen, lokal cache, og frontend, mens Instrukdb er det, som det gamle tjek-ind system er bygget på.

De sprog, vi brugte, var baseret på de krav vi havde til neocheckin:

* Simpelt at bruge og lære
* Skalerbart
* Opfylder systemkravende
* Gør det, som vi har brug for at gøre

Mere specifikt havde vi disse tanker om sprogende:

### Wrapperens krav

Wrapperen's originale mål var, at skulle ligge som et lag udenom Instrukdb og hente alt det data vi havde brug for.

Da der hverken var API til Instrukdb, og vi ikke vidste om vi ville få tilladelse til det, valgte vi i stedet at læse fra de interne .php filer, brugt til intranettet, som viser ting som elevbilleder og flex.

Vi brugte det derudover også som et eksempel, til hvilke data vi *kunne* få, og som et argument til hvorfor vi vil have en API skrevet.

Eftersom vi skulle læse gennem en masse .php filer, skulle vi have et sprog vi nemt kunne arbejde med, som nemt kunne læse ting i et HTML format, hvor TypeScript selvfølgelig var et perfekt match.

Vi prøvede som et basis at bare bruge JavaScript's XML parser (eftersom HTML bare er mindre strikt XML, som beskriver markup regler), der var dog det problem, at hvementen der havde lavet de sider, ikke havde lukket deres HTML ordenligt, så XML parseren jo ikke virkede, eftersom det ikke var ordenligt XML!

Vi valgte derfor at i stedet skrive en masse lange regex patterns til at hente det data vi havde brug for.

Dog at vi skrev et nyt tjek-ind system, i teknologier som Flutter, fangede interessen af instruktøren ansvarlig for det gamle tjek-ind system, som bragte op muligheden om at få nogle APIer skrevet.

Efter mødet og en fremvisning af vores fremskridt, fik vi så muligheden til at få noget API skrevet.

### Cachens krav

Vi valgte at bruge Go, da det ville give os muligheden for at f.eks. køre det på en Raspberry Pi, hvis det virkelig krævede, samt med at det var markant simplere end andre lignende sprog (C, C++, Rust), dels pga. deres garbage collector som C og C++ ikke har (Rust har egentligt heller ikke en-, dog har de et lignende system), deres standard lib som C ikke har, og den generelle simplicitet som C++ og Rust ikke har. Derudover var det også noget nyt og spændende at bruge.

Vi havde tankerne at det nok skulle køres på sin egen server, men det endte med at vi faktisk kunne køre både cache og frontend på samme Raspberry Pi.

### Frontendens krav

At vælge Flutter var ren tilfældighed; men det endte med at være et godt valg. Vi skulle gerne kunne køre den på en Raspberry Pi, hvilket er muligt vha. [flutter-pi](https://github.com/ardera/flutter-pi).

Desværre krævede det mange forskellige ting at skulle bygge, og selv om vi var på Linux, som var klart det optimale, var det ikke altid nemt.

Jeg har så derfor skrevet en Dockerfile til at bygge projektet i stedet, som trods at vi havde nogle problemer, har jeg fået den på en stabil tilstand.

En Dockerfile er en liste af handlinger, der skabes på en virtuel maskine af en art.

I vores tilfælde, er det en liste af handlinger, der klargører virtuelmaskinen til at bygge vores frontend, og til sidst bygger den og klargører alle de relevante dele, hvorefter vi eksporterer en kopi af filsystemet.

Du kan finde den Dockerfile her: [Neocheckin Flutter App Dockerfile](/misc/neocheckin/Dockerfile-frontend.txt).

Jeg har klart tænkt mig at bruge Dockerfiles i fremtiden, bare på grund af hvor meget nemmere de gør alting.

## Tankerne bag neocheckin

### Bedre end det gamle system

Det gamle system var, kort sagt, rent spaghetti.

Det, som mange ting ved praktikcenteret, er skrevet i PHP, og som nævnt tidligere ligger på en PHP backend/database kaldet Instrukdb, som er fuld af lappeløsninger ovenpå lappeløsninger.

For at give dig en idé af hvordan det var, her er hvordan de håndterer hvilke tidspunkter man må tjekke ind og ud:

```javascript
function updateClock()
{
    var dayStart = "09:00:00"; //tjek ind (Mandag, Tirsdag, Onsdag, Torsdag)
    var dayEnd = "15:00:00"; //tjek ud (Mandag, Tirsdag, Onsdag, Torsdag)
    var dayEndFriday = "11:30:00"; //tjek ud (fredag)
    // ... omkring 16 flere linjer af det her

    var currentTime = new Date ();

    var weekDay = currentTime.getDay();
    var currentHours = currentTime.getHours ();
    var currentMinutes = currentTime.getMinutes ();
    var currentSeconds = currentTime.getSeconds ();

    var currentTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + curentHours + ":" + currentMinutes + ":" + currentSeconds);
    var normalStartTimeStamp = new Date((currentTime.getMonth() + 1) + "/" + currentTime.getDate() + "/" + currentTime.getFullYear() + " " + dayStart);
    // ... gentaget med forskellige tidspunkter omkring 18 gange
}
```

Jeg har forkortet det markant; den fulde rå fil fra siden kan findes her: [Gamle tjek-ind frontend](/misc/neocheckin/old-frontend.js).

Det er selvfølgelig bare noget frontend javascript; men det sætter ikke et specielt godt eksempel til, hvordan backend koden ser ud. Jeg er desuden også blevet fortalt af mine kollegaer, der skulle arbejde på at skrive den API, vi bruger, at koden bag Instrukdb er langt fra det bedste.

Jeg ved ikke om de var allergisk til et for loop, men det var hvertifald sådan nogle slags problemer vi ville undgå, samt at bare gøre projektet meget mere skalerbart.

Vi har derfor i stedet gjort det med en simpel JSON fil alá det her:

```json
[
    {
        "id": 0,
        "displayName": "Tjek Ind",
        "category": "check in",
        "priority": true,
        "schedule": {
            "from": { 
                "hour": 7, 
                "minute": 0, 
                "second": 0 
            },
            "to": { 
                "hour": 9, 
                "minute": 0, 
                "second": 0 
            },
            "days": {
                "monday": true,
                "tuesday": true,
                "wednesday": true,
                "thursday": true,
                "friday": true,
                "saturday": false,
                "sunday": false
            }
        }
    },
    ...
]
```

Vores data går ikke efter at skulle være nødvendigvist "effektivt" at læse eller skrive, men for at være markant *nemmere* at læse og skrive; desuden at eftersom det er læst fra en fil, så længe de følger det samme format, kunne man i teorien have lige så mange man vil have, uden ekstra at skulle skrive ekstra kode.

Det er en stor del af filosofien bag neocheckin:
* Gør det nemt at ændre
* Gør det nemt at bruge
* Gør det bedre end det gamle system, og prøv at undgå de samme problemer de er kommet ind i.

### Bedre design

Da det var PHP, brugte det også et WordPress tema oveni nogle andre notifikationer, der gjorde at det ikke var specielt intuitivt at bruge.
Vi, og vores andre kollegaer der ikke er så vant til det gamle system, har f.eks. ofte oplevet, at vi tjekker ud forkert, fordi det WordPress tema kombineret med de knapper som der bruges, har så dårlig kontrast at man simpelthen glemmer at de er der.

Vi har også oplevet, at man kan komme til at scanne sit kort to gange, så man bliver tjekket ind, og derefter tjekket ud igen direkte efter, hvilket, hvis man ikke ser det, betyder at man bliver registreret som fraværende den dag af systemet.

### En mere direkte og skalerbar fremgangsmetode

I det gamle system, bruger vi som EUXere Skive's tjek-ind system, da vi er under den samme ledelse som Skive, så selv om vi er placeret i Viborg, er vi "tættere" på at være Skive afdelingen, end vi er at være Viborg afdelingen.

Skive's system er en seperat version af Viborg's system, der sender en POST request til deres frontend, eftersom de bruger en HTML form, som man rimeligt ofte gør i PHP.

Det har desuden også nogle seperate funktioner som at cache requests, hvis VPNen fejler, og nogle frontend features f.eks. hvem der er tjekket ind eller ej.

Da både Skive's system og Viborg's system er interne, sender Skive selvfølgelig dets anmodninger gennem VPN.

Men eftersom vi ikke er i Skive, skal vi forbinde til skives system, gennem en VPN.

Det skaber et system alá "nuværende system" på denne graf, kontra hvordan vi laver "vores system":

(Afdeling 1 kan tænkes som "Skive", og Afdeling 2 som "EUX", jeg har bare forsøgt at gøre den abstrakt.)

![graf, der beskriver det gamle tjek-ind system's setup og vores](/images/neocheckin/setup-comparison.png)

Det er ikke specielt skalerbart, at skulle bruge en VPN, for at forbinde til noget der også bruger en VPN, som har en chance for at fejle.

Vi havde lyst til at undgå disse problemer, med at i stedet holde alting lokalt og seperat, ved brug af opdelte services; da i det gamle system, hvis f.eks. Skive's VPN var nede, ville det konsekvent betyde, at alle fremtidige afdelinger der måske forbindede til Skive, ville være nede.

Med vores system, reducerer vi derfor punkterne hvor noget kan gå galt infrastrukturmessigt.
