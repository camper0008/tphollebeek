---
title: brainfuck interpreter
description: En brainfuck interpreter skrevet i Rust, originalt skrevet i C.
date: 2022-01-10
tags: ["project", "rust"]
layout: article.njk
---

## Hurtigt om brainfuck

Brainfuck, også kendt gennem navnende "brainf\*ck" eller "brainfrick", er et "esoterisk" programmeringssprog, (Det vil sige, et sprog der generelt findes for at skulle være unikke, udfordrende eller interessante at bruge, kun for interessens skyld. De er generelt ikke skabt til at have noget praktisk brug.)

Brainfuck's tema er, at kunne have et [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) sprog, med så få instrukser som muligt, og generelt at være så forvirrende at bruge som muligt.

Det udfører den ved at den kun bruger 8 instrukser i form af tegnene `+`, `-`, `<`, `>`, `[`, `]`, `,`, `.`, og en stack af unsigned 8 bit tal og stack "pointer" (markør, der beskriver hvor i stacken man befinder sig); alting udover de 8 tegn er registreret som kommentarer.

Hvad de instrukser gør, samt mere information omkring Brainfuck, kan [findes på Wikipedia](https://en.wikipedia.org/wiki/Brainfuck).

## Førstehåndsindtrykket af Rust

Da jeg hørte om Rust, var jeg meget nysgerrig om konceptet, men havde ikke fået en chance til at afprøve det; jeg var desuden også tøvende, da sproget lignede at det havde et stort "new language syndrome", hvor de skulle omskrive *alt* syntaks, da de for alt i verden skulle undgå at være "endnu en (indsæt sprog her) klon", og det fra et C og TypeScript perspektiv lignede noget rent hokus pokus.

Dog, op til juleferien hvor alle dem der ikke på fysisk ferie, hvertifald er mentalt, sad jeg og havde mangel af ting at lave; vi var blevet færdig med det meste af [neocheckin](/projects/neocheckin) for et par uger siden, og siden da havde vi arbejdet på personlige projekter mens vi ventede på det nye skridt.

Det var på det tidspunkt, at jeg satte mig ned og ville lære Rust.

Mit første projekt var ikke dog ikke en brainfuck interpreter; det var en endnu simplere ting: et inverted binary tree.

Kort sagt: det gik ikke helt perfekt; jeg gjorde det mere kompleks end det behøvede at være fordi jeg ville bevise at jeg kunne gøre det som jeg ville havde gjort det i C. Men det var okay! Jeg lærte meget omkring syntaksen og Rust som et sprog.

Der gik 3 uger, hvor jeg arbejdede på personlige projekter i stedet, men på den 21. december kom jeg tilbage til Rust, denne gang for at lave en brainfuck interpreter.

## brainfuck-interpreter-rust

Nu hvor jeg havde lært mere om Rust, tænkte jeg som en sand Rustacean, at jeg ville omskrive mine tidligere projekter i Rust, f.eks. min C brainfuck interpreter, det ville være rimelig simpelt.

Jeg startede den 21. december, og blev færdig med den første version knapt en dag senere.

Der viste sig dog at være et problem: Den var forfærdeligt, *forfærdeligt* sløv.

Det betød ikke meget med simple programmer som f.eks. Hello World, men da mit program tog 2 minutter om at køre en benchmark som tog min kollega få sekunder at køre, vidste jeg der var noget galt.

Selv da mit program var "færdigt", var der pludselig kommet en ny udfordring: at optimere.

## Optimering

Noget hurtigt brainfuck teori:

Brainfuck programmer bruger de to tegn `[` og `]` for at definere start og slut på et loop; for at kende op på ned og vide hvilke begyndelser der havde hvilket slutninger, genererede jeg nogle "bracket pairs", et struct der havde en `begin` og `end` værdi, der så nogenlunde sådan her ud:

```rust
#[derive(Copy, Clone)]
pub struct BracketPair {
   pub begin: u32,
   pub end: u32,
}
```
Det mest indlysende var, at jeg copierede og clonede en BracketPair, hver gang jeg skulle finde et par med matchende værdier.

Jeg fiksede det hurtigt, ved at frem for at returnere et BracketPair hvor en værdi matchede enten start eller slut, returnerede jeg bare ren start og slut positionerne som havde en matchende slut/start position af en værdi, som et tal.

Grunden til at jeg gjorde det i første sted, var fordi at den var primært direkte omskrevet fra det originale C kode.

Det viste sig at gøre den hurtigere, men kun med meget få sekunder, når jeg helst skulle have den ned flere minutter, så de nemmere løsninger virkede desværre ikke. Jeg skulle omskrive min interpreter.

Jeg omskrev derfor min brainfuck interpreter til at bruge nogle "instruction" tokens, da jeg tidligere bare gik direkte gennem hvert tegn, dvs. et struct der representerede et hvis instruktionstype med en hvis instruktionsværdi, f.eks. ville `+` have en type af `Increment` og en værdi af `1`, mens en LoopBegin ville have en værdi af positionen af dens matchende LoopEnd.

```rust
pub enum TokenType {
    Increment, Decrement,
    IncrementPointer, DecrementPointer,
    Input, Output,
    LoopBegin, LoopEnd,
    Comment,
}
pub struct Token {
    pub t: TokenType,
    pub v: usize,
}
```

Dette gjorde en meget stor forskel, nu behøvede jeg ikke længere at skulle gå igennem alle par af brackets før jeg kunne finde den rigtige, jeg kunne under runtime bare se hvad min nuværende token's type of værdi var.

Efter det, lavede jeg småting som hvis det er flere af de samme tokens sammen, ville jeg sætte dem sammen, så hvad der før ville være
```rust
[ 
    Token(Increment, 1), Token(Increment, 1), 
    Token(Increment, 1), Token(Increment, 1), 
    Token(Increment, 1), Token(Increment, 1), 
    Token(Increment, 1), Token(Increment, 1)
]
```
blev til
```rust
[ Token(Increment, 8) ]
```

Derudover filtrerede jeg også alle `Comment` tokens ud, hvilket gjorde en overraskende større forskel end forventet, og vóila! Min Optimized Brainfuck Interpreter var færdig.

Den endte med at gå fra ca. 2 minutter og 45 sekunder til en lynhurtig 1.615 sekunder, en 14200% forskel! I sidste ende endte jeg endda med at være hurtigere end min kollega med en ~0.4 sekunders forskel.

Udover det, lærte jeg også meget om Rust og dets funktionalitet ved at lave dette projekt.

## Links

Koden for alle disse projekter nævnt kan findes på min Github:

- [Brainfuck Interpreter - Rust](https://github.com/camper0008/brainfuck-interpreter-rust).

- [Brainfuck Interpreter - C](https://github.com/camper0008/brainfuck-interpreter-c).

- [Rust Inverted Binary Tree](https://github.com/camper0008/inverted-binary-tree-rust).
