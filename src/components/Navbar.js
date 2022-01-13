function NavbarLink(props) {
    return (
        <a 
        className="navbar-link"
        href={props.page}
        onClick={(event) => {
            event.preventDefault();
            document.title = props.name;
            props.setPage(props.page);
            window.history.pushState({}, props.name, props.page);
        }}
        onKeyUp={(event) => {
            if (event.key === 'Enter') {
                event.target.click();
            }
        }}
        tabIndex="0">
            {props.name.toLowerCase()}
        </a>
)
}

function Navbar(props) {
  return (<>
    <nav className="navbar-menu" id="navbar-menu">
        <NavbarLink name="Hjem" page="/" setPage={props.setPage} />
        <span className="navbar-divider">|</span>
        <NavbarLink name="Projekter" page="/portfolio" setPage={props.setPage} />
        <span className="navbar-divider">|</span>
        <NavbarLink name="Erfaring" page="/experience" setPage={props.setPage} />
        <span className="navbar-divider">|</span>
        <NavbarLink name="Om mig" page="/about" setPage={props.setPage} />
        <span className="navbar-divider">|</span>
        <NavbarLink name="Kontakt" page="/contact" setPage={props.setPage} />
        <span className="navbar-divider">|</span>
        <a href="https://v2-tphollebeek.netlify.app" className="navbar-link">ny side</a>
    </nav>
    <button 
        className="navbar-mobile-toggle" 
        id="navbar-mobile-toggle"
        onClick={() => {
            const [navbarMenu, navbarToggle] = [document.querySelector('#navbar-menu'), document.querySelector('#navbar-mobile-toggle')]
            if (navbarMenu.classList.contains('collapsed')) {
                navbarMenu.classList.remove('collapsed');
                navbarToggle.classList.remove('collapsed');

                navbarToggle.textContent = '×'
            } else {
                navbarMenu.classList.add('collapsed');
                navbarToggle.classList.add('collapsed');

                navbarToggle.textContent = '+'
            }
        }}>×</button>
  </>);
}

export default Navbar;
