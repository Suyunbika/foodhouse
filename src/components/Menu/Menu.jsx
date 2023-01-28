import Category from '../Category/Category';
import './Menu.css';

import ListMenu from '../List-menu/ListMenu';
import { useEffect, useState } from 'react';

import { categories } from '../../data/categories';
import { list } from '../../data/list';

const Menu = () => {
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