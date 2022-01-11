---
title: Brainfuck Interpreter
description: En brainfuck interpreter skrevet i Rust, originalt skrevet i C.
date: 2022-01-10
tags: ["project", "rust"]
layout: article.njk
---

## Hurtigt om brainfuck

Brainfuck, også kendt gennem navnende "brainf\*ck", "brainfrick" eller på flinkt dansk, "hjernevask", er et ["esoterisk" programmeringssprog](https://en.wikipedia.org/wiki/Esoteric_programming_language), det vil sige, et sprog der generelt findes for at skulle være unik, udfordrende eller interessant at bruge. De er generelt ikke skabt til at have noget réelt praktisk brug, da der findes bedre, "normale" sprog til at gøre det allerede.

Brainfuck's tema er, at kunne have et [Turing-complete](https://en.wikipedia.org/wiki/Turing_completeness) sprog, med så få instrukser som muligt, og generelt at være så forvirrende at bruge som muligt (derfra navnet).

Det udfører den ved at den kun bruger 8 instrukser i form af tegnene `+`, `-`, `<`, `>`, `[`, `]`, `,`, `.`, og en liste af unsigned 8 bit tal (den nørdede måde at sige "et tal fra 0 til 255") og 'pointer' (markør, der peger til hvor i listen man befinder sig); alting udover de 8 tegn er registreret som kommentarer.

Hvad de instruktioner specifikt gør, samt mere information om Brainfuck, er [bedre forklaret af dets Wikipedia-artikel](https://en.wikipedia.org/wiki/Brainfuck).

Eksempelvis, her et et simpelt program jeg har skrevet der finder summen af numre, hvis resultatet er under 10 (f.eks. 5+4=9, 2+5=7, 8+1=9)

```brainfuck
,>,[-<+>]++++++++[<------>-]<.
```

## Førstehåndsindtrykket af Rust

Da jeg hørte om Rust, var jeg meget nysgerrig om konceptet, men havde ikke fået en chance til at afprøve det; jeg var desuden også tøvende, da sproget lignede at det havde et stort "new language syndrome", hvor de skulle omskrive *alt* syntaks, da de for alt i verden skulle undgå at være "endnu en (indsæt sprog her) klon", og det fra et C og TypeScript perspektiv lignede noget rent hokus pokus.

Dog, op til juleferien hvor alle dem der ikke på fysisk ferie, hvertifald er mentalt, sad jeg og havde mangel af ting at lave; vi var blevet færdig med det meste af [neocheckin](/projects/neocheckin) for et par uger siden, og siden da havde vi arbejdet på personlige projekter mens vi ventede på det nye skridt.

Det var på det tidspunkt, at jeg satte mig ned og ville lære Rust.

Mit første projekt var ikke dog ikke en brainfuck interpreter; det var en endnu simplere ting: et inverted binary tree.

Kort sagt: det gik ikke helt perfekt; jeg gjorde det mere kompleks end det behøvede at være fordi jeg ville bevise at jeg kunne gøre det som jeg ville havde gjort det i C. Men det var okay! Jeg lærte meget om syntaksen og Rust som et sprog.

Der gik 3 uger, hvor jeg arbejdede på personlige projekter i stedet, men på den 21. december kom jeg tilbage til Rust, denne gang for at lave en brainfuck interpreter.

## brainfuck-interpreter-rust

Nu hvor jeg havde lært mere om Rust, tænkte jeg som en sand [Rustacean](https://www.rustaceans.org/), at jeg ville omskrive mine tidligere projekter i Rust, f.eks. min C brainfuck interpreter, da det ville være rimelig simpelt.

Jeg startede den 21. december, og blev færdig med den første version knapt en dag senere.

Der viste sig dog at være et problem: Den var forfærdeligt, *forfærdeligt* langsom.

Det betød ikke meget med simple programmer som f.eks. Hello World, men da mit program tog ca. 2 ½ minut om at køre en benchmark som tog min kollega få sekunder at køre, vidste jeg der var noget galt.

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

```rust
pub fn get_bracket_pair(&self, pos: u32) -> Option<BracketPair> {
    for i in 0..self.bracket_pairs.len() {
        if self.bracket_pairs[i].start == pos || self.bracket_pairs[i].end == pos {
            return Some(self.bracket_pairs[i]);
        }
    }
    None
}
```

Jeg fiksede det hurtigt, ved at frem for at returnere et BracketPair hvor en værdi matchede enten start eller slut, returnerede jeg bare ren start og slut positionerne som havde en matchende slut/start position af en værdi, som et tal.

```rust
pub fn get_bracket_start(&self, end: usize) -> usize {
    for v in &self.bracket_pairs {
        if v.end == end {
            return v.start;
        }
    }
    panic!("unopened bracket end character at '{}'", end)
}
pub fn get_bracket_end(&self, start: usize) -> usize {
    for v in &self.bracket_pairs {
        if v.start == start {
            return v.end;
        }
    }
    panic!("unclosed bracket start character at '{}'", start)
}
```

Grunden til at jeg gjorde det i første sted, var fordi at jeg primært havde omskrevet det direkte fra C koden.

Det viste sig at gøre den hurtigere, men kun med meget få sekunder, når jeg helst skulle have den ned flere minutter, så de nemmere løsninger virkede desværre ikke; Jeg skulle omskrive min interpreter.

Jeg omskrev derfor min brainfuck interpreter til at bruge nogle "instruction" tokens, (da jeg tidligere bare gik direkte gennem hvert tegn), dvs. et struct der representerede en hvis instruktionstype med en hvis instruktionsværdi, f.eks. ville `+` have en type af `Increment` og en værdi af `1`, mens en `LoopBegin` instruktion ville have en værdi af positionen af dens matchende `LoopEnd`.

```rust
pub enum TokenType {
    Increment, 
    Decrement,
    IncrementPointer,
    DecrementPointer,
    Input, Output,
    LoopBegin, LoopEnd,
    Comment,
}
pub struct Token {
    pub t: TokenType,
    pub v: usize,
}
```

Dette gjorde en meget stor forskel, nu behøvede jeg ikke længere at skulle gå igennem alle par af brackets før jeg kunne finde den rigtige, hvis den havde en matchende type, kunne jeg bare bare se hvad min nuværende token's værdi var!

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

Den endte med at gå fra ca. 2 minutter og 45 sekunder til en lynhurtig 1,615 sekunder, en >99% forskel! I sidste ende endte jeg endda med at være hurtigere end min kollega med en ~0,4 sekunders forskel.

Udover det, lærte jeg også meget om Rust og dets funktionalitet ved at lave dette projekt.

## Kildeliste

Koden for alle disse projekter nævnt kan findes på min GitHub:

- [Brainfuck Interpreter - Rust](https://github.com/camper0008/brainfuck-interpreter-rust).

- [Brainfuck Interpreter - C](https://github.com/camper0008/brainfuck-interpreter-c).

- [Rust Inverted Binary Tree](https://github.com/camper0008/inverted-binary-tree-rust).

Mere information om Brainfuck er bedre forklaret af [dets Wikipedia-artikel](https://en.wikipedia.org/wiki/Brainfuck), bemærk at den er engelsk.
