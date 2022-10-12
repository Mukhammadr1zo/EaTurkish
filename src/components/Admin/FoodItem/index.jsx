import React from 'react';
import { Link } from 'react-router-dom';
import { host } from '../../../constants';

import style from './Item.module.scss'

const FoodItem = ({food, func}) => {
    const handleDelete = async () => {
        await fetch(`${host}/food/${food?.food_id}`, {method: 'DELETE'})
        func(food?.food_id)
    }

    return (
        <div className={style.item}>
            <div className={style.item__info}>
                <img src={food?.food_img} alt="food img" className={style.item__info__img} />
                <span>
                    <p className={style.item__info__price}>{food?.food_price} $</p>
                    <p className={style.item__info__name}>{food?.food_name}</p>
                </span>
            </div>
            <div className={style.item__btns}>
                <Link to={`/admin/foodupload/${food?.food_id}`}>Изменить</Link>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </div>
    );
}

export default FoodItem;
