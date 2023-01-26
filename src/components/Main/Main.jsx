import './Main.css';
import main from "../../assets/hero-image.svg";

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="main_inner">
                    <div className="main-info">
                        <div className="main-info-text">
                            <p className='main-info_p1'>Экспресс-доставка от Яндекс.Еды</p>
                            <h1 className='main-info_h1'>Быстро <br /> и вкусно.</h1>
                            <p className="main-info_p2">Сеть быстрого питания #1 в Казани</p>
                        </div>
                        <div className="main-order">
                            <a href="#" className="main-order-button">Сделать заказ</a>
                            <p className="main-order-text">бесплатная доставка от 500 рублей</p>
                        </div>
                    </div>
                    <div className="main-img">
                        <img className='hero-image' src={main} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;