import './style.css';
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
            return <Home />;
        case '/about':
            return <About />;    
        case '/portfolio':
            return <Portfolio />;
        case '/experience':
            return <Experience />;
        case '/contact':
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

    return (<div>
        <Toolbar setPage={setPage}/>
        {getPage(page.replace(/\/$/, ''))}
    </div>);
}

export default App;