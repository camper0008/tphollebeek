import footerIcon from '../assets/images/icons/medal-blue.svg'
import Rating from '../components/Rating'

function Experience() {
    return (
        <section className="section">
            <h1>Kompetencer</h1>
            <h2>Sproglige</h2>
            <p>Jeg er født og opvokset i Danmark, og taler og skriver selvfølgelig derfor dansk flydende.</p>
            <p>Jeg er også flydende i engelsk, både i tale og skriftligt, og vil sige det er på samme niveau som mit dansk, hvis ikke bedre.</p>
            <p>Jeg kan også tale og skrive tysk fra at lære det i folkeskolen, dog ikke på samme niveau som mit dansk og engelsk.</p>
            <h2>IT</h2>
            <p>Jeg har flere års erfaring indenfor webudvikling, og har programmeret siden jeg var 13.</p>
            <p>Jeg har god erfaring indenfor følgende sprog:</p>
            <ul>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>Lua</li>
                <li>Python</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <p>Og har enten tidligere erfaringer med- eller er i gang med at lære:</p>
            <ul>
                <li>Dart</li>
                <li>PHP</li>
                <li>C#</li>
            </ul>
            <p>Jeg har også god erfaring indenfor andre webudviklingsteknologier og lignende, f.eks:</p>
            <ul>
                <li>NodeJS, deri
                    <ul>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </li>
                <li>React</li>
                <li>JQuery</li>
                <li>Webpack</li>
            </ul>
            <p>Og har enten tidligere erfaringer med- eller er i gang med at lære:</p>
            <ul>
                <li>Flutter</li>
                <li>ASP.net</li>
            </ul>
            <p>Jeg har også erfaring med brug af office og lignende.</p>
            <h2>Personlige</h2>
            <p>Når jeg arbejder på et projekt, kan jeg let blive grebet af det og arbejde meget fokuseret, da programmering er en stor hobby for mig.</p>
            
            <img className="icon" src={footerIcon} alt="et blåt ikon af en medalje" height="52" width="52"></img>
        </section>
    );
  }

export default Experience;