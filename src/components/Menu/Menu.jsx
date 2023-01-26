import Category from '../Category/Category';
import './Menu.css';
import salad from '../../assets/green-salad.svg'
import drink from '../../assets/drink.svg'
import hamburger from '../../assets/hamburger.svg'
import fri from '../../assets/french-fries.svg'
import pizza from '../../assets/pizza.svg'
import discount from '../../assets/discount.svg'
import item1 from '../../assets/item__image.png';
import item2 from '../../assets/item__image1.png';
import item3 from '../../assets/item__image2.png';
import item4 from '../../assets/item__image3.png';
import item5 from '../../assets/item__image4.png';
import item6 from '../../assets/item__image1.png';
import item7 from '../../assets/item__image2.png';
import item8 from '../../assets/item__image3.png';
import ListMenu from '../List-menu/ListMenu';


const Menu = () => {
    const categories = [
        {
            url: salad,
            text: "Салаты"
        },
        {
            url: drink,
            text: "Напитки"
        },
        {
            url: hamburger,
            text: "Бургеры"
        },
        {
            url: fri,
            text: "Закуски"
        },
        {
            url: pizza,
            text: "Пицца"
        },
        {
            url: discount,
            text: "Акции"
        }
    ]

    const list = [
        {
            url: item1,
            text: "Салат"
        },
        {
            url: item2,
            text: "Салат Греческий"
        },
        {
            url: item3,
            text: "Салат Тропический"
        },
        {
            url: item4,
            text: "Салат Японка"
        },
        {
            url: item5,
            text: "Салат Собери Сам"
        },
        {
            url: item6,
            text: "Салат Цезарь"
        },
        {
            url: item7,
            text: "Салат Оливье"
        },
        {
            url: item8,
            text: "Салат Летний"
        }
    ]

    return (
        <div className="menu">
            <div className="container">
                <div>
                    <h2 className="menu-title">Наше меню</h2>
                    <div className="menu-line"></div>
                </div>
                <div className="menu_inner">
                    {
                        categories.map((category) => {
                            return (
                                <Category url={category.url} text={category.text} />
                            )
                        })
                    }
                    
                </div>
                <div className="list-menu">
                    {
                        list.map((category) => {
                            return (
                                <ListMenu url={category.url} text={category.text} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;