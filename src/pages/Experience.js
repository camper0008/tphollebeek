import footerIcon from '../images/icons/medal-blue.svg'
import Rating from '../components/Rating'

function Experience() {
    return (
        <div class="section">
            <h1>Kompetencer</h1>
          
            <h2>Sproglige</h2>

            <p>Dansk - 5/5</p>
            <Rating length="5" />
            <p>Engelsk - 5/5</p>
            <Rating length="5" />
            <p>Tysk - 3/5</p>
            <Rating length="3" />

            <h2>IT</h2>

            <p>Microsoft Excel - 4/5</p>
            <Rating length="4" />
            <p>WebDev (HTML, CSS, JavaScript/TypeScript), NodeJS, Lua - 4/5</p>
            <Rating length="4" />
            <p>Diverse sprog- bl.a. Python - 3/5</p>
            <Rating length="3" />
            <h2>Personlige</h2>
            <p>Når jeg arbejder på et projekt, især hvis det er noget der interesserer mig som f.eks. matematik el. programmering, kan jeg let "zone ind" og arbejde meget fokuseret.</p>
            
            <img class="icon" src={footerIcon} alt="Et blåt ikon af en medalje."></img>
        </div>
    );
  }

export default Experience;