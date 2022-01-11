---
title: pap.vin
description: Personlig hjemmeside til at lære om server hosting og system administration. Og domænet lød sjovt. Det var 90% af grunden.
date: 2022-01-11
tags: ["project", "nginx", "server hosting", "sysadmin"]
layout: article.njk
---

## Domænet 'pap.vin'

Jeg var i færd med at kigge på domæner til min hjemmeside, og kiggede på forskellige TLDs ([top-level domain(s)](https://en.wikipedia.org/wiki/Top-level_domain)), som `dk`, `com` eller `site`, for at finde hvad jeg synes ville passe bedst; der fandt jeg så ud af, at man kunne bruge `vin` som et TLD.

Som en intern joke mellem kammerater synes jeg det derfor ville være morsomt at have et domæne, der hed [pap.vin](https://pap.vin), som jeg ville bruge sammen med en server til bl.a. filhosting og generelt at lære mere om server hosting og system administration.

Den dag valgte jeg så at registrere domænet pap.vin, og købte en [DigitalOcean](https://www.digitalocean.com) droplet (en "droplet" er deres version af en server) til at følge med, samt oprettede jeg en [Cloudflare](https://www.cloudflare.com) konto til brug af deres DNS og SSL-certifikater.

## Brugen af pap.vin

Originalt kørte jeg en lille javascript server til at håndtere bl.a. redirects og statiske filer, samt at hoste en side hvor eleverne ved PraktikCenter Viborg kunne indtaste deres tjek ind- og ud tider, i mens vi testede det nye tjekindsystem [neocheckin](/projects/neocheckin) på `/flex`, men så tænkte jeg, at det i længden ville være smartere at bruge f.eks. Nginx til at håndtere sådan nogle ting, da det var det, som det var skabt til at gøre.

Så kom jeg i gang med at lære at bruge Nginx og skrive en Nginx config fil.

Det tog lidt tid at skulle bakse med, men efter en dag eller to var jeg færdig.

pap.vin kan derfor nu:
* Håndtere statiske filer til både [pap.vin](https://pap.vin) og [pap.vin/flex](https://pap.vin), .

* Sende API anmodninger fra `/flex/api` videre til dets serverprocess.

* Omdirigere fra `/site`  til denne side, samt fra `/arch/<script-navn>` til nogle scripts jeg har skrevet til min arch-installation, hosted på [GitHub](https://github.com/camper0008/arch).

## Kildeliste

Koden bag pap.vin kan findes på [GitHub](https://github.com/camper0008/pap.vin).

Selveste pap.vin kan findes på [pap.vin](https://pap.vin).
