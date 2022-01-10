---
title: Rust Brainfuck Interpreter
description: En brainfuck interpreter skrevet i Rust, originalt skrevet i C.
date: 2022-01-10
tags: ["project", "rust"]
layout: article.njk
---

## Hurtigt om brainfuck

Brainfuck, også kendt gennem navnende "brainf\*ck" eller "brainfrick", er et "esoterisk" programmeringssprog, (Det vil sige, et sprog der generelt findes for at skulle være unikke, udfordrende eller interessante at bruge, kun for interessens skyld. De er generelt ikke skabt til at have noget praktisk brug.)

Brainfuck's tema er, at kunne have et [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) sprog, med så få instrukser som muligt, og generelt at være så forvirrende at bruge som muligt.

Det udfører den ved at den kun bruger 8 instrukser i form af tegnene `+`, `-`, `<`, `>`, `[`, `]`, og en stack af unsigned 8 bit tal og stack "pointer" (markør, der beskriver hvor i stacken man befinder sig).

Hvad de instrukser gør, samt mere information omkring Brainfuck, kan [findes på Wikipedia](https://en.wikipedia.org/wiki/Brainfuck).

## Førstehåndsindtrykket af Rust

Da jeg hørte om Rust, var jeg meget nysgerrig om konceptet, men havde ikke fået en chance til at afprøve det; jeg var desuden også tøvende, da sproget lignede at det havde et stort "new language syndrome", hvor de skulle omskrive *alt* syntaks, da de for alt i verden skulle undgå at være "endnu en (indsæt sprog her) klon", og det fra et C og TypeScript perspektiv lignede noget rent hokus pokus.

Dog, op til Juleferien hvor alle dem der ikke på fysisk ferie, hvertifald er mentalt, sad jeg og havde mangel af ting at lave; vi var blevet færdig med det meste af [Neocheckin](/projects/neocheckin) for et par uger siden, og siden da havde vi arbejdet på personlige projekter mens vi ventede på det nye skridt.

Det var på det tidspunkt, at jeg satte mig ned og ville lære Rust.

Mit første projekt var ikke dog ikke en brainfuck interpreter; det var en endnu simplere ting: et inverted binary tree.

Kort sagt: det gik ikke helt perfekt; jeg gjorde det mere kompleks end det behøvede at være fordi jeg ville bevise at jeg kunne gøre det som jeg ville havde gjort det i C. Men det var okay! Jeg lærte meget omkring syntaksen og Rust som et sprog.

Der gik 3 uger, hvor jeg arbejdede på personlige projekter i stedet, men på den 20 december kom jeg tilbage til Rust, denne gang for at lave en brainfuck interpreter.

## brainfuck-interpreter-rust

Jeg kaldte mit projekt brainfuck-interpreter-rust.

## Links

Dette projekt findes på [Github](https://github.com/camper0008/brainfuck-interpreter-rust).

Mit Inverted Binary Tree i Rust findes også på [Github](https://github.com/camper0008/inverted-binary-tree-rust).
