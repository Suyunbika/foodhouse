import logo from '../../assets/FoodHouse.svg';
import cart from '../../assets/cart.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header_inner">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <nav className="nav-menu">
                        <a href="#" className="nav">Главная</a>
                        <a href="#" className="nav">Меню</a>
                        <a href="#" className="nav">Сервис</a>
                        <a href="#" className="nav">О нас</a>
                    </nav>
                    <div>
                        <img className="cart" src={cart} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;