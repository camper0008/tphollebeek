import '../style.css';
import messangerImage from '../images/messanger.jpg';
import footerIcon from '../images/icons/portfolio-blue.svg';

function Portfolio() {
    return (
        <div class="section">
          <h1>Projekter</h1>

          <h2>Min hjemmeside</h2>
            <p>Denne hjemmeside i sig selv er noget jeg, andet end ikoner, selv 100% har designet og lavet.</p>
            <p>I fremtiden planlægger jeg at erstatte nogen af dem med noget der 100% er mit eget.</p>

          <h2>0s and 1s</h2>
            <p>Omtrent da jeg først startede ud med Node og webservere lavede jeg en simpel multiplayer Kryds & Bolle som jeg kaldte for 0s And 1s, ud fra at kryds var et 1 og at bolle var et 0.</p>
            <p>Desuden var baggrunden også lavet af tekst, for at undgå at skulle importere billeder for spillet.</p>
            <pre style={{textAlign: "center"}}>┌───┬───┬───┐
│ 0 │ 1 │ # │
├───┼───┼───┤
│ 0 │ # │ 1 │
├───┼───┼───┤
│ 0 │ # │ # │
└───┴───┴───┘
PLAYER 0 WON!
- GAME OVER -</pre>

          <h2>MessAnger</h2>
            <p>For nyligt som et skoleprojekt lavede jeg sammen med min klassekammerat <a href="https://simonfj20.site" target="_blank" rel="noreferrer">Simon From Jakobsen</a> en webapp hvor man kunne skabe diskussionsrumme og sende beskeder til hinanden, samt med et registerings- og loginssystem.</p>
            <p>Alt frontend er skabt af mig inkl. programmering i HTML, CSS og TypeScript, og alt backendarbejdet er lavet af <a href="https://simonfj20.site" target="_blank" rel="noreferrer">Simon From Jakobsen</a>.</p>
            <p>Du kan finde github siden for det projekt <a href="https://github.com/SimonFJ20/MessAnger/tree/frontend-v2" target="_blank" rel="noreferrer">her</a>.</p>
            <p>Ligesom denne side, er webappen også bygget til mobiler, dog skal man gå ind på /mobile for at få adgang til den, hvilket man ikke behøver for denne side.</p>
            <img class="project" src={messangerImage} alt="Et webapp der forestiller en chatting app. Den er sort og grøn i tema."></img>
            <p><i>demobillede af vores webapp.</i></p>
            <p>Jeg har desuden også lavet mange projekter i Lua, som et dialogsystem, samt mange UI projekter.</p>
          <img class="icon" src={footerIcon} alt="Et blå ikon af en silhuet af en portfolio."></img>
        </div>
    );
}

export default Portfolio;