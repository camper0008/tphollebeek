import { useState } from 'react';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

function getPage(page) {
    switch (page) {
        case '/home':
            document.title = 'Hjem';
            return <Home />;
        case '/experience':
            document.title = 'Erfaring';
            return <Experience />;
        case '/portfolio':
            document.title = 'Projekter';
            return <Portfolio />;    
        case '/about':
            document.title = 'Om mig';
            return <About />;    
        case '/contact':
            document.title = 'Kontakt';
            return <Contact />;
        default:
            return (
                <h1>404 ikke fundet</h1>
            );
    }

}

function App() {

    const [page, setPage] = useState(window.location.pathname);
    if(page === '/') setPage('/home');

    return (<>
        <Toolbar setPage={setPage}/>
        {getPage(page.replace(/\/$/, ''))}
    </>);
}

export default App;