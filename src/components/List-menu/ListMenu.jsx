import './ListMenu.css';

const ListMenu = ({ url, text }) => {
    return (
        <div className="listmenu">
            <img src={url} alt={text}/>
            <h2 className="listmenu-text">{text}</h2>
        </div>
    )
};

export default ListMenu;