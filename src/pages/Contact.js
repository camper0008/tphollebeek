import footerIcon from '../assets/images/icons/work-blue.svg'

function Contact() {
    return (
        <div className="section">
            <h1>Kontakt</h1>
            <p>Jeg vil helst kontaktes vha. sms på <a href="tel:+4571200491">+45 71 20 04 91</a>, hvorfra du nok får en besked tilbage indenfor en dag eller to.</p>
            <p>Hvis du ringer er der en stor chance for at jeg ikke tager den fordi jeg er studerende og min døgnrytme kan stærkt variere, så send mig helst en besked først, og så skal jeg nok ringe tilbage hurtigst muligt.</p>
            <p>Der er også min <a href="https://www.linkedin.com/in/theis-pieter" target="_blank" rel="noreferrer">LinkedIn</a> eller <a href="https://www.github.com/camper0008">GitHub</a>.</p>
            <p>Du også kan kontakte mig gennem mail ved <a href="mailto:tphollebeek@gmail.com">tphollebeek@gmail.com</a>, og forvente svar indenfor en uge eller tre.</p>
            <img className="icon" src={footerIcon} alt="Et blåt ikon af en mappe."></img>
        </div>
  );
}

export default Contact;