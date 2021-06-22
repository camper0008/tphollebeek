import headshotImage from './../images/me.jpg'
import footerIcon from '../images/icons/person-blue.svg'

function About() {
    return (
        <div class="section">
            <h1>min historie</h1>
            <h2>min interesse indenfor IT</h2>
            <img class="me" src={headshotImage} height="300" alt="Mig, en blond dreng med langt hår der laver fredstegn med fingrene."></img>
            
            <p>Min barndom var fyldt med videospil, selv siden jeg var helt ung kan jeg huske at spille Day of Defeat: Source, Counter Strike: Source og lignende på min fars computer.</p>
            <p>Eventuelt fik jeg også min egen computer, og som enhver unge der spiller meget, får man tankegangen om hvor sejt det ville være at lave sine egne spil, hvor man selv har kreativ kontrol.</p>
            <p>De første spil var i ting som RPG Maker VX Ace eller Roblox Studio, hvor jeg byggede mine egne baner ud fra hvad der blev givet til mig. Jeg arbejde også, sammen med en kammerat, på hvad vi havde forventet ville være et stort projekt, siden vi var meget unge og ambitiøse.</p>
            <p>Idéen var, at jeg lavede banerne og min kammerat skulle programmere, men fordi min partner ikke var specielt god til at programmere, endte jeg med at tage over programmeringssiden også, hvorfra min kærlighed for programmering startede.</p>
            <p>Jeg havde også en interesse indenfor digital design, gennem bl.a. paint.net og blender  og lignende så jeg kunne lave billeder og andre assets.</p>
            <p>Jeg begyndte eventuelt så også at sælge nogle af disse baner, designs og scripts for virtuelle penge, som senere blev til rigtige penge.</p>
            <p>Da jeg var en unge havde jeg altid en drøm om at være spildesigner, efter jeg solgte et billede jeg havde lavet, overvejede jeg at blive grafisk designer, og overvejede endda at tage det som min uddannelse.</p>
            <p>I 9. klasse, og efter mange historier om hvor forfærdelig pengemessigt at være bl.a. grafisk- eller spildesigner være, og efter at jeg fandt ud af at jeg elskede problemsløsningen der kommer fra at programmere, valgte jeg i stedet at blive Datatekniker msi. Programmering på Midtbyens Gymnasium.</p>
            <p>Gnisten omkring at lave spillet døde eventuelt, men nu havde jeg en stor glæde overfor programmering og design, og gik derfor på forskellige internetfora centreret på programmering, hvor jeg hjalp andre med at fikse deres programmering, hvilket jeg selv lærte meget af ud fra de mange gange jeg selvfølgelig var forkert.</p>
            
            <h2>mig; 2021</h2>

            <p>Andet end programmering er mine hobbies at stå på longboard, cykle, alkohol, musik og som enhver anden teenager, at sove.</p>
            <p>Jeg går meget op i musik, og kunne nok tale om det i timevis, så for at lige gå kort over det:</p>
            <p>For det meste af tiden lytter jeg til rock eller alternativ rock som Junkie, Floats, The Frights, Beach Goons, Surf Curse, Mexican Slum Rats og mange andre.</p>
            <p>Derudover også meget punk rock som Wavves, FIDLAR, Descendants, Dead Kennedys, Misfits og Black Flag.</p>

            <img class="icon" src={footerIcon} alt="Et ikon af en blå silhuet."></img>
        </div>

    );
  }

export default About;