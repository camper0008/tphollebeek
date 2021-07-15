function ToolbarButton(props) {
    return (
        <a 
        className="toolbar-link"
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

function Toolbar(props) {
  return (<>
    <div className="toolbar-menu" id="toolbar-menu">
        <ToolbarButton name="Hjem" page="/" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="Erfaring" page="/experience" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="Projekter" page="/portfolio" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="Om mig" page="/about" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="Kontakt" page="/contact" setPage={props.setPage} />
    </div>
    <button 
        className="toolbar-menu-toggle" 
        id="toolbar-menu-toggle"
        onClick={() => {
            const [toolbarMenu, toolbarToggle] = [document.querySelector('#toolbar-menu'), document.querySelector('#toolbar-menu-toggle')]
            if (toolbarMenu.classList.contains('collapsed')) {
                toolbarMenu.classList.remove('collapsed');
                toolbarToggle.classList.remove('collapsed');

                toolbarToggle.textContent = '×'
            } else {
                toolbarMenu.classList.add('collapsed');
                toolbarToggle.classList.add('collapsed');

                toolbarToggle.textContent = '+'
            }
        }}>
            ×
        </button>
  </>);
}

export default Toolbar;
