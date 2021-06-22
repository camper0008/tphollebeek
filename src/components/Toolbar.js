import '../style.css';

function ToolbarButton(props) {
    return (
        <div class="toolbar-button">
            <a href={props.link}
            onClick={() => {
                props.setPage(props.page);
                window.history.pushState({}, props.name, props.page);
            }}
            onKeyUp={(event) => {
                if (event.key === 'Enter') {
                    event.target.click();
                }
            }}>
                {props.name}
            </a>
        </div>
    )
}

function Toolbar(props) {
  return (
    <div class="toolbar-menu">
        <ToolbarButton name="Hjem" page="/" setPage={props.setPage} />
        <span class="toolbar-divider">|</span>
        <ToolbarButton name="Erfaring" page="/experience" setPage={props.setPage} />
        <span class="toolbar-divider">|</span>
        <ToolbarButton name="Projekter" page="/portfolio" setPage={props.setPage} />
        <span class="toolbar-divider">|</span>
        <ToolbarButton name="Om mig" page="/about" setPage={props.setPage} />
        <span class="toolbar-divider">|</span>
        <ToolbarButton name="Kontakt" page="/contact" setPage={props.setPage} />
    </div>
  );
}

export default Toolbar;