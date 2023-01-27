import './ListMenu.css';

const ListMenu = ({ url, text, des, size }) => {
    return (
        <div className="listmenu">
            <img className='listmenu-img' src={url} alt={text}/>
            <div className="listmenu-info">
                <h2 className="listmenu-text">{text}</h2>
                <p className="listmenu-des">{des}</p>
                <p className="listmenu-size">{size}</p>
                <a href='#' className='listmenu-button'>Добавить в корзину</a>
            </div>
            
        </div>
    )
};

export default ListMenu;