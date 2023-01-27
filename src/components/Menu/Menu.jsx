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
import item9 from '../../assets/drink.jpg';
import item10 from '../../assets/burger.jpg';
import item11 from '../../assets/doska.jpg';
import item12 from '../../assets/pizza-napoletana.jpg';

import ListMenu from '../List-menu/ListMenu';
import { useEffect, useState } from 'react';

const Menu = () => {
    const categories = [
        {
            url: salad,
            text: "Салаты",
            type: "salad"
        },
        {
            url: drink,
            text: "Напитки",
            type: "drink"
        },
        {
            url: hamburger,
            text: "Бургеры",
            type: "hamburger"
        },
        {
            url: fri,
            text: "Закуски",
            type: "snacks"
        },
        {
            url: pizza,
            text: "Пицца",
            type: "pizza"
        },
        {
            url: discount,
            text: "Акции",
            type: "discount"
        }
    ]

    const list = [
        {
            url: item1,
            text: "Салат",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "salad"
        },
        {
            url: item9,
            text: "Напиток Лайм",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "drink"
        },
        {
            url: item10,
            text: "Сочный бургер",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "hamburger"
        },
        {
            url: item11,
            text: "Закуска с рыбой",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "snacks"
        },
        {
            url: item12,
            text: "Пицца Наполетана",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "pizza"
        },
        {
            url: item6,
            text: "Салат Цезарь",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "salad"
        },
        {
            url: item7,
            text: "Салат Оливье",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "salad"
        },
        {
            url: item8,
            text: "Салат Летний",
            des: "300 грамм - 1 порция",
            size: "36 - белков, 11 - жиров, 55 - углеводов",
            type: "salad"
        }
    ]

    const [category, setCategory] = useState(categories);
    const [product, setProduct] = useState(list);

    const [selectedCategory, setSelectedCategory] = useState("none");

    const onChangeSelectedCategory = (type) => {
        setSelectedCategory(type);
    };

    useEffect(() => {
        setProduct((prevState) => {
            prevState = [...prevState];

            prevState = list.filter(
                (product) => product.type === selectedCategory
            );

            if (selectedCategory === "none") {
                prevState = product;
            }

            return prevState;
        });
    }, [selectedCategory]);

    return (
        <div className="menu">
            <div className="container">
                <div>
                    <h2 className="menu-title">Наше меню</h2>
                    <div className="menu-line"></div>
                </div>
                <div className="menu_inner">
                    {
                        category.map((category) => {
                            return (
                                <Category category={category} onChangeSelectedCategory={onChangeSelectedCategory}/>
                            )
                        })
                    }
                    
                </div>
                <div className="list-menu">
                    <div className="container">
                        {
                            product.map((listItem) => {
                                return (
                                    <ListMenu url={listItem.url} text={listItem.text} des={listItem.des} size={listItem.size}/>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
            <button className='button-all'>Показать ещё</button>
        </div>
    )
}

export default Menu;