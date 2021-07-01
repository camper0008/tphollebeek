import footerIcon from '../assets/images/icons/home-blue.svg';

function Home() {
    return (
        <div className="section footer">
            <h1>velkommen</h1>
            <p>Hej, jeg er Pieter, en <span id="age">17</span> år gammel student og programmør.</p>
            <p>Klik på linksene øverste oppe (eller til venstre, hvis du er på mobil), for at kunne få mere at vide om mig.</p>
            <img className="icon" src={footerIcon} alt="Et blåt ikon af et hus."></img>
        </div>
    );
  }

export default Home;