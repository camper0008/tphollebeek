import headshotImage from './../assets/images/me.jpg'
import footerIcon from '../assets/images/icons/person-blue.svg'

function About() {
    return (
        <div className="section">
            <h1>min historie</h1>
            <h2>min interesse indenfor IT</h2>
            <img className="me" src={headshotImage} height="300" alt="Mig, en blond dreng med langt hår der laver fredstegn med fingrene."></img>
            
            <p>Min barndom var fyldt med videospil. Siden jeg var helt ung, kan jeg huske at havde spillet Day of Defeat: Source, Counter Strike: Source og lignende på min fars computer.</p>
            <p>Senere fik jeg også min egen computer, og som enhver unge, der spiller meget, kommer man til at tænke på, hvor sejt det ville være at lave sine egne spil, hvor man selv har kreativ kontrol.</p>
            <p>De første spil jeg lavede var i programmer som RPG Maker VX Ace eller Roblox Studio, hvor jeg byggede mine egne baner ud fra, hvad der blev givet til mig af programmerne. Jeg arbejdede også, sammen med en kammerat, på hvad vi havde forventet ville være et stort projekt, da vi var meget unge og ambitiøse.</p>
            <p>Idéen var, at jeg lavede banerne, og min kammerat skulle programmere, men fordi min kammerat ikke var specielt god til at programmere, endte jeg med at tage programmeringssiden også, hvorfra min kærlighed for programmering startede.</p>
            <p>Gnisten ved at lave spillet forsvandt senere hen, men nu havde jeg fået en stor glæde ved programmering og design, og jeg gik derfor på forskellige internetfora, der var centreret om programmering, hvor jeg hjalp andre med at fikse deres programmering, hvilket jeg selv lærte meget af ud fra de mange gange, jeg selvfølgelig også lavede fejl.</p>
            <p>Jeg havde også en interesse indenfor digital design, gennem bl.a. paint.net og blender og lignende, så jeg kunne lave billeder og andre assets.</p>
            <p>Jeg begyndte derefter også at sælge nogle af disse baner, designs og scripts for virtuelle penge, som senere blev til rigtige penge.</p>
            <p>Da jeg var lille havde jeg altid en drøm om at være spildesigner. Da jeg solgte et billede, jeg havde lavet, overvejede jeg at blive grafisk designer, og jeg overvejede endda at tage det som min uddannelse.</p>
            <p>I 9. klasse, og efter mange historier om, hvor forfærdelig forhold man kunne have som grafisk- eller spildesigner, og efter at jeg fandt ud af, at jeg elskede problemsløsningen, der kommer ved at programmere, valgte jeg i stedet at blive Datatekniker msi. Programmering på Midtbyens Gymnasium.</p>
            
            <h2>mig; 2021</h2>

            <p>Andet end programmering er mine fritidsinteresser at stå på longboard, cykle, fester, musik og som enhver anden teenager, at sove.</p>
            <p>Jeg går meget op i musik, og jeg kunne nok tale om det i timevis, så for at lige at gøre det kort:</p>
            <p>For det meste af tiden lytter jeg til rock eller alternativ rock som Junkie, Floats, The Frights, Beach Goons, Surf Curse, Mexican Slum Rats og mange andre.</p>
            <p>Derudover også meget punk rock som Wavves, FIDLAR, Descendants, Dead Kennedys, Misfits og Black Flag.</p>

            <img className="icon" src={footerIcon} alt="Et ikon af en blå silhuet."></img>
        </div>

    );
  }

export default About;