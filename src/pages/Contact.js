import footerIcon from '../assets/images/icons/work-blue.svg'

function Contact() {
    return (
        <section className="section">
            <h1>Kontakt</h1>
            <p>Jeg vil helst kontaktes vha. sms på <a href="tel:+4571200491">+45 71 20 04 91</a>.</p>
            <p>Hvis du ringer og jeg ikke når at svare, skal jeg nok ringe tilbage så hurtigt som muligt.</p>
            <p>Der er også min <a href="https://www.linkedin.com/in/theis-pieter" target="_blank" rel="noreferrer">LinkedIn</a> eller <a href="https://www.github.com/camper0008">GitHub</a>.</p>
            <img className="icon" src={footerIcon} alt="Et blåt ikon af en mappe." height="52" width="52"></img>
        </section>
  );
}

export default Contact;