import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { host } from '../../../constants';
import FoodItem from '../FoodItem';

import style from './Foods.module.scss'

const Foods = () => {
    const [menu, setMenu] = useState([])

    const deleteItem = (food_id) => {
        setMenu(state => state.filter(el => el.food_id !== food_id))
    }

    useEffect(() => {
        fetch(`${host}/foods`)
            .then(res => res.json())
            .then(res => setMenu(res.data))
            .catch(err => alert(err))
    }, []);

    return (
        <div className={style.foods}>
            <div className={style.foods__nav}>
                <h2>Foods</h2>
                <Link to={'foodupload'}>+  add food</Link>
            </div>

            <div className={style.foods__container}>
                <div>
                    {
                        menu?.length > 0 && menu.map(menu => <FoodItem food={menu} key={menu.food_id} func={deleteItem}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Foods;
