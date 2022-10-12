import React from 'react';
import { Link } from 'react-router-dom'
import getTimes from '../../utils';

import style from './NewsCard.module.scss'

const NewsCard = ({ news }) => {
    if(!news) return <></>

    const { news_id, news_img, news_title, news_desc, created_at } = news

    const { fullDate } = getTimes(created_at)

    return (
        <div className={style.card}>
            <img src={news_img} alt="news img" />
            <span className={style.card__info}>
                <h3 className={style.card__title}>{news_title}</h3>
                <p className={style.card__desc}>{news_desc}</p>
                <span>
                    <Link to={`/news/${news_id}`} className={style.card__link}>Read More</Link>
                    <time className={style.card__date}>{fullDate}</time>
                </span>
            </span>
        </div>
    );
}

export default NewsCard;
