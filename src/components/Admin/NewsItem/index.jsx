import React from 'react';
import { Link } from 'react-router-dom';
import { host } from '../../../constants';

import style from './NewsItem.module.scss'

const NewsItem = ({news, func}) => {
    const handleDelete = async () => {
        await fetch(`${host}/news/${news?.news_id}`, {method: 'DELETE'})
        func(news?.news_id)
    }

    return (
        <div className={style.item}>
            <div className={style.item__info}>
                <p className={style.item__info__title}>{news?.news_title}</p>
                <p className={style.item__info__desc}>{news?.news_desc}</p>
            </div>
            <div className={style.item__btns}>
                <Link to={`/admin/newsupload/${news?.news_id}`}>Изменить</Link>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </div>
    );
}

export default NewsItem;
