import React from 'react';

import Star from './Star';

import style from './MenuCard.module.scss'

const MenuCard = ({stars = false, menu }) => {
    if(!menu) return <></>

    const { food_name, food_img, food_price, food_stars } = menu
    const status = new Array(5).fill(true, 0, food_stars).fill(false, food_stars, 5)

    return (
        <div className={style.card}>
            <img className={style.card__img} src={food_img} alt="food img" />
            <h4 className={style.card__name}>{food_name}</h4>
            <div className={style.card__stars}>
                {
                    status.length > 0 && stars !== false
                        ? status.map((sts, index) => <Star active={sts} key={index} />)
                        : <></>
                }
            </div>
            <span className={style.card__price}>${food_price}</span>
        </div>
    );
}

export default MenuCard;