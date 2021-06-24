
import messangerImage from '../assets/images/messanger.jpg';
import footerIcon from '../assets/images/icons/portfolio-blue.svg';
import firmacorpImage from '../assets/images/firmacorp_animated.png';

function Portfolio() {
    return (
        <div className="section">
          <h1>Projekter</h1>

          <h2>Min hjemmeside</h2>
            <p>Denne hjemmeside i sig selv er noget jeg, andet end ikoner, selv 100% har designet og lavet.</p>
            <p>I fremtiden planlægger jeg at erstatte nogen af dem med noget der 100% er mit eget.</p>

          <h2>0s and 1s</h2>
            <p>Omtrent da jeg først startede ud med Node og webservere lavede jeg en simpel multiplayer Kryds & Bolle som jeg kaldte for 0s And 1s, ud fra at kryds var et 1 og at bolle var et 0.</p>
            <p>Desuden var baggrunden også lavet af tekst, for at undgå at skulle importere billeder for spillet.</p>
            <pre style={{textAlign: "center"}}>
              ┌───┬───┬───┐<br/>
              │ 0 │ 1 │ # │<br/>
              ├───┼───┼───┤<br/>
              │ 0 │ # │ 1 │<br/>
              ├───┼───┼───┤<br/>
              │ 0 │ # │ # │<br/>
              └───┴───┴───┘<br/>
              PLAYER 0 WON!<br/>
              - GAME OVER -
            </pre>

          <h2>MessAnger</h2>
            <p>Som et skoleprojekt lavede jeg sammen med min klassekammerat <a href="https://simonfromjakobsen.netlify.app" target="_blank" rel="noreferrer">Simon From Jakobsen</a> en webapp hvor man kunne skabe diskussionsrumme og sende beskeder til hinanden, samt med et registerings- og loginssystem.</p>
            <p>Alt frontend er skabt af mig inkl. programmering i HTML, CSS og TypeScript, og alt backendarbejdet er lavet af <a href="https://simonfromjakobsen.netlify.app" target="_blank" rel="noreferrer">Simon From Jakobsen</a>.</p>
            <p>Du kan finde github siden for det projekt <a href="https://github.com/SimonFJ20/MessAnger/tree/frontend-v2" target="_blank" rel="noreferrer">her</a>.</p>
            <p>Ligesom denne side, er webappen også bygget til mobiler, dog skal man gå ind på /mobile for at få adgang til den, hvilket man ikke behøver for denne side.</p>
            <img className="project" src={messangerImage} alt="Et webapp der forestiller en chatting app. Den er sort og grøn i tema."></img>
            <p><i>demobillede af vores webapp.</i></p>
            <p>Jeg har desuden også lavet mange projekter i Lua, som et dialogsystem, samt mange UI projekter.</p>

          <h2>FirmaCorp Site</h2>
            <p>For vores GF2 afsluttende eud eksamen bedes vi blandt andet lave en hjemmeside til et fiktivt firma.</p>
            <p>For det lavede jeg sammen med min klassekammerat <a href="https://simonfromjakobsen.netlify.app" target="_blank" rel="noreferrer">Simon From Jakobsen</a> en hjemmeside med en startside med karrusel af forskellige produkter, produktliste og produktside, samt et Intra for at skabe og slette nye produkter og opdatere karrusellen.</p>
            <p>Ligesom med MessAnger lavede jeg frontend mens Simon lavede backend, og hjalp hinanden hvor muligt.</p>
            <p>Det endte med at se ret godt ud, dog meget grundlæggende i design pga. tidsmæssige begrænsninger.</p>
            <img className="project" src={firmacorpImage} alt="Side med en karrusel af forskellige produkter."></img>
            <p>Du kan se github siden for projektet <a href="https://github.com/SimonFJ20/firmacorp-site">her</a>.</p>

          <img className="icon" src={footerIcon} alt="Et blåt ikon der forestiller en portfolio."></img>
        </div>
    );
}

export default Portfolio;