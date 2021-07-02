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
            {props.name}
        </a>
)
}

function Toolbar(props) {
  return (
    <div className="toolbar-menu">
        <ToolbarButton name="hjem" page="/" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="erfaring" page="/experience" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="projekter" page="/portfolio" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="om mig" page="/about" setPage={props.setPage} />
        <span className="toolbar-divider">|</span>
        <ToolbarButton name="kontakt" page="/contact" setPage={props.setPage} />
    </div>
  );
}

export default Toolbar;
