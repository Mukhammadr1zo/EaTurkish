import React, { useEffect, useState } from 'react';

import arrow from '../../assets/kapkir.svg'
import { host } from '../../constants';
import NewsCard from '../NewsCard';

import style from './News.module.scss'

const NewsSection = () => {
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)

    const viewMoreFunc = () => {
        setPage(state => state + 1)
    }

    useEffect(() => {
        fetch(`${host}/news?limit=9&page=${page}`)
            .then(res => res.json())
            .then(res => setNews(state => [...state, ...res.data]))
            .catch(err => alert(err))
    }, [page]);

    return (
        <div className={style.news}>
            <div className={style.news__block + ' container'}>
                <span>
                    <h3 className={style.news__title}>News</h3>
                    <img src={arrow} alt="icon" />
                </span>
                <div className={style.news__cards}>
                    {
                        news?.length > 0 && news.map(news => <NewsCard news={news} key={news.news_id} />)
                    }
                </div>
                <button className={style.news__btn} onClick={viewMoreFunc}>View More</button>
            </div>
        </div>
    );
}

export default NewsSection;
