---
title: tphollebeek
description: Hjemmeside, hvor jeg skriver om mine projekter.
date: 2022-01-12
tags: ["project", "frontend", "eleventy", "scss", "javascript"]
layout: article.njk
---

## Mine hjemmesider

Min hjemmeside har gået gennem 3 stadier nu, og jeg er kommet til en process som jeg er meget stor fan af, ved brug af eleventy.

## Den 1. side

Den første var en html og css side (som jeg senere omdannede til at bruge React), hvor jeg skrev et par sætninger om migselv og mine projekter, med en lang liste af de sprog jeg havde haft kendskab eller erfaring med.

![første side af version 1 af min side, med et meget åbenlyst blåt tema](/images/tphollebeek/v1.png)

Der var især fokus på bl.a. Erfaring og Om Mig, da jeg ikke havde opbygget mange projekter endnu.

Det var lidt træls at skulle skrive om nye projekter, da det bare var en lille novelle hvor jeg prøvede at smadre de få projekter jeg havde i så mange ord som muligt.

Der gik et par måneder, før jeg eventuelt valgte at jeg ville lave en ny side.

## Den 2. side

Denne gang skulle det være et one-page layout, så kunne jeg jo lave én fil, og det eneste folk skulle gøre var at scrolle!

![første side af version 2 af min side](/images/tphollebeek/v2.png)

Det virkede okay; der var nogle mangel på projekter så igen kom der meget fokus på andre ting, men idetmindste havde jeg et par ting jeg kunne vise frem.

Langt de fleste var dog frontendprojekter, og selv om jeg havde erfaring med backend var det ikke altid mig der arbejdede på de projekter.

Der var dog to rimelig store problemer:
1. Det var simpelthen ikke var nemt nok at skrive om nye projekter, på grund af den måde jeg havde sat alting op, og at jeg ville have et alternativ til folk der ikke brugte javascript, betød at skulle skrive alting i den éne html fil var et mareridt.
2. At skulle kigge på projekterne var ikke specielt effektivt. Da jeg kun brugte billeder af mine projekter, havde jeg et stort problem i, at det simpelthen ikke var klart at vide om et projekt var interessant eller ej.

Jeg havde desuden også snakket med mange, der var klogere på disse ting end jeg var, og et tema jeg så gik meget igen var at sætte stor fokus på projekter i detalje, da de taler meget mere til din dygtighed, end en lang kildeliste af alting du nogensinde har arbejdet med.

Så jeg vidste, at på min nye side ville jeg holde det simpelt. Jeg ville have én kort resume af hvad jeg har gjort, og min kildeliste af alting jeg nogensinde havde arbejdet med, samt en anden side alá denne, hvor jeg nemt kunne skrive om mine projekter.

## Min 3. (nuværende) side

### Idéerne bag

På arbejde ved PraktikCenter Viborg bruger jeg til dagligt [Arch Linux](https://archlinux.org/), da det er sådan jeg mener jeg arbejder bedst.

Jeg har modificeret langt de fleste ting derpå, til at bruge ét uniformt farveskema.

Jeg er meget stor fan af farven blå (som man måske kunne ane på de andre to sider 😉), så derfor valgte jeg [Nord](https://www.nordtheme.com/) som mit farveskema, som langsomt gik over til, at jeg også brugte Nord til alting andet.

Derfor synes jeg kun det gav god mening at bruge Nord til min nye hjemmeside; det ville desuden også tage en masse bøvl ud af at skulle skabe et godt farveskema.

Jeg legede lidt med hvordan jeg ville lave mit layout, samt tog inspiration fra andre, og endte ultimativt med at det lignede dette. Jeg bruger selv meget tid på at læse og snakke med andre om User Interface & Experience Design, og har stor interesse i det, så det hjalp at undgå nogle fejl jeg ellers ville havde begået under mit design.

For eksempel, i min 2. version af hjemmesiden, havde jeg "tphollebeek" i venstre hjørne, og alle mine navigationslinks til højre.

Da vi fra den vestlige verden læser fra venstre til højre, er det dog en ret dum idé at holde alle de vigtige ting der, hvor vores øjne naturligt holder os væk fra, så i det nye design valgte jeg at holde mine navigationslinks fast i venstre.

Det er sådan nogle slags små, men rimelige vigtige ting, jeg også har taget med mig da jeg skulle lave denne hjemmeside.

### Teknologierne

Min gamle side brugte én meget lang HTML fil, samt én meget lang CSS fil.

Så til at starte med, valgte jeg, at jeg som et minimum ville bruge en eller anden CSS preprocessor, så jeg nemt kunne kombinere alle mine filer til én stor fil.

Jeg valgte at bruge [Sass](https://sass-lang.com/), specifikt Scss, da det var det, jeg havde mest kendskab til, og da det kunne alting som jeg havde brug for, at det skulle gøre.

Derudover bruger jeg også [11ty/eleventy](https://11ty.dev), da jeg havde både hørt gode ting om hvor både hurtigt at bruge og simpelt det var, samt at det kunne alting jeg ville gøre.

Jeg havde tidligere også prøvet at bruge bl.a. [Jekyll](https://jekyllrb.com/) til andre projekter, men jeg synes, at 11ty har været markant nemmere at bruge og ændre til mine egne behov.

Nu har jeg nogle nunjucks filer, der forklarer hvordan mit layout skal være, et par filter jeg har skrevet til at f.eks. formatere dato eller gøre så at links til andre sider åbner i en ny fane, og noget scss til at få det til at se flot ud, derfra kan jeg bare skrive nogle Markdown filer, og vóila!

Derefter kan det bare smides direkte på [Netlify](https://netlify.app), som genbygger siden automatisk hver gang jeg opdaterer den.

Det har klart været det nemmeste og mest effektive måde jeg har gjort ting længe, og jeg forventer at beholde denne måde at lave static sider på i lang, lang tid.

Jeg skulle selvfølgelig stadigvæk lave styling, layout og så videre selv, men det har været en stor hjælp.

## Kildeliste

Siden er lavet med [11ty/eleventy](https://11ty.dev) og [Sass](https://sass-lang.com/), og er hosted med [Netlify](https://netlify.app).

Siden's 1. version kan findes her: [1. version](https://react-v1-tphollebeek.netlify.app/)

Siden's 2. version kan findes her: [2. version](https://v2-tphollebeek.netlify.app/)

Denne side kan findes både på [tpho.dk](https://tpho.dk/) og [tphollebeek.dk](https://tphollebeek.dk/).
