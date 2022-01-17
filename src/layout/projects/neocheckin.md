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

Det har en netværksgraf der ligner nogenlunde dette:

![en graf, der viser de 3 lag af neocheckin: wrapper, lokal cache, frontend, samt instrukdb](/images/neocheckin/setup-solo.png)

De sprog, vi brugte, var baseret på de krav vi havde til neocheckin:

* Simpelt at bruge og lære
* Skalerbart
* Opfylder systemkravende
* Gør det, som vi har brug for at gøre

Mere specifikt havde vi disse tanker om sprogende:

### Wrapperens krav

Wrapperen's originale mål var, at skulle ligge som et lag udenom instrukdb og hente alt det data vi havde brug for.

Da der hverken var API til instrukdb, og vi ikke vidste om vi ville få tilladelse til det, valgte vi i stedet at læse fra de interne .php filer, brugt til intranettet, som viser ting som elevbilleder og flex.

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

## Tankerne bag neocheckin

### Bedre end det gamle system

Det gamle system var, kort sagt, rent spaghetti.

Det, som mange ting ved praktikcenteret, er skrevet i PHP, og ligger på en PHP backend/database kaldet Instrukdb, som er fuld af lappeløsninger ovenpå lappeløsninger.


Der var desuden mangel på sikkerhed, og det at skulle modificere systemet, er et rent mareridt.

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

Jeg ved ikke om de var allergisk til et `for` loop, men det var hvertifald sådan nogle slags problemer vi ville undgå, samt at bare gøre projektet meget mere skalerbart.

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
    }
]
```

Vores data går ikke efter at skulle være nødvendigvist "effektivt" at læse eller skrive, men for at være markant *nemmere* at læse og skrive.

Det er en stor del af filosofien bag neocheckin:
* Gør det nemt at ændre
* Gør det nemt at bruge
* Gør det bedre end det gamle system, og prøv at undgå de samme problemer de er kommet ind i.

### Bedre design

Da det var PHP, brugte det også et WordPress tema oveni nogle andre notifikationer, der gjorde at det ikke var specielt intuitivt at bruge.
Vi, og vores andre kollegaer der ikke er så vant til det gamle system, har f.eks. ofte oplevet, at vi tjekker ud forkert, fordi det WordPress tema kombineret med de knapper som der bruges, har så dårlig kontrast at man simpelthen glemmer at de er der, og at man desuden nogen gange kommer til at scanne sit kort to gange, så man bliver tjekket ind, og derefter tjekket ud igen direkte efter, og hvis man ikke ser det, registrerer systemet jo simpelthen ikke at man er tjekket ind.

## Beskrivelse

Et system for at tjekke ind og ud af arbejdet, til at kunne erstatte de tidligere systemer, med
forskellige muligheder, f.eks. hvis man skulle tjekke ud tidligt til lægebesøg eller lignende.
Mine kollega og jeg der var sat på opgaven mente at det nuværende system ikke var godt 
nok, så vi valgte at også tillægge nogle forbedringer til det udover den gamle funktionalitet.

Vi opdaterer derudover også arkitekturen, da systemet skal bygges ovenpå en gammel
PHP backend, som skal forbindes til over en VPN, der har en chance til at fejle, som vi
naturligvis ikke har tilladelse til at ændre på, eftersom den har kontrol over medarbejder
feriedage, flextid, osv.

For at gøre det nemmere for os har min kollega derfor skrevet en wrapper server i
TypeScript som skal kunne tage det data vi får fra PHP backenden, så vi ikke behøver at
spørge hvis vi vil have en eller to småting ændret.

Vi kalder det en ”wrapper” da den skal kunne ligges som et lag rundt om den nuværende
PHP backend.

Der har også været problemer hvor VPN forbindelsen dropper, hvorefter ledelsen skal taste
hver elev’s tjek ind/ud tidspunkt ind manuelt.
For at løse det har jeg skrevet et Cache lager, som skal kunne gemme elevdata som f.eks.
navn og billeder, og formindske hvor mange gange vi skal få data over VPNen, da det har
en chance for at fejle.

Til sidst har vi frontenden, som selvfølgelig også skulle opdateres. Den har jeg skrevet i
Dart og Flutter, og designet efter input min kollega og jeg har samlet fra vores andre
kollegaer om hvad der kunne gøres bedre omkring det tidligere system.

![graf, der beskriver det gamle tjek-ind system's setup og vores](/images/neocheckin/setup-comparison.png)

