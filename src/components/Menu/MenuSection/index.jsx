import React, { useEffect, useState } from 'react';

import MenuCard from '../../MenuCard'
import Filter from '../Filter'
import { host } from '../../../constants'

import style from './MenuSection.module.scss'

const MenuSection = () => {
    const [menu, setMenu] = useState([])
    const [category, setCategory] = useState(false)

    const changeCategory = (category_id) => {
        setCategory(category_id)
    }

    useEffect(() => {
        fetch(`${host}/foods?${category ? `category_id=${category}` : ''}`)
            .then(res => res.json())
            .then(res => setMenu(res.data))
            .catch(err => alert(err))
    }, [category]);
    
    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <Filter handleClick={changeCategory}/>
                <div className={style.section__cards}>
                    {
                        menu?.length > 0 && menu.map(menu => <MenuCard menu={menu} key={menu.food_id}/>)
                    }
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
