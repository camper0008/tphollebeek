import footerIcon from '../assets/images/icons/home-blue.svg';
import React, { useState, useEffect } from 'react';

const birthday = Date.UTC(2004, 4, 18);

function Home() {
    const [age, updateAge] = useState(0);
    

    useEffect(() => {
      const interval = setInterval(() => {
        updateAge(_ => {
            const ageInMilliseconds = Date.now() - birthday;
            return (ageInMilliseconds/(1000*60*60*24*365.25)).toFixed(9);
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);

    return (
        <section className="section footer">
            <h1>velkommen</h1>
            <p>Hej, jeg er Pieter, en <span id="age">{age}</span> år gammel student og programmør.</p>
            <p>Hvis du klikker på de links øverste oppe (eller til venstre, hvis du er på mobil), kan du få mere at vide om mig.</p>
            <img className="icon" src={footerIcon} alt="Et blåt ikon af et hus." height="52" width="52"></img>
        </section>
    );
  }

export default Home;