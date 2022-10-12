import React, { useEffect, useState } from 'react';
import MenuCard from '../../MenuCard';

import MenuItem from './MenuItem';
import { host } from '../../../constants'

import style from './MenuSection.module.scss'

const MenuSection = () => {
    const [menu, setMenu] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(false)

    const changeCategory = (category_id) => {
        setCategory(category_id)
    }

    useEffect(() => {
        fetch(`${host}/categories`)
            .then(res => res.json())
            .then(res => setCategories(res.data))
            .catch(err => alert(err))
    }, []);

    useEffect(() => {
        fetch(`${host}/foods?${category ? `category_id=${category}` : ''}`)
            .then(res => res.json())
            .then(res => setMenu(res.data))
            .catch(err => alert(err))
    }, [category]);

    return (
        <section className={style.section}>
            <div className="container">
                <h3 className={style.section__title}>Our Regular Menu Pack</h3>

                <div className={style.section__categories}>
                    {
                        categories.length > 0 && categories.map(ctg => (
                            <MenuItem
                                key={ctg.category_id}
                                text={ctg.category_name}
                                handleClick={() => changeCategory(ctg.category_name !== 'All' ? ctg.category_id : '')}
                            />
                        ))
                    }
                </div>

                <div className={style.section__cards__block}>
                    {
                        menu?.length > 0 && menu.map(menu => <MenuCard menu={menu} key={menu.food_id}/>)
                    }
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
