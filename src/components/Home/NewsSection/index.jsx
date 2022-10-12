import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { host } from '../../../constants';
import NewsCard from '../../NewsCard';
import arrow from '../../../assets/arow.svg'

import style from './NewsSection.module.scss'

const NewsSection = () => {
    const [news, setNews] = useState([])
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/news')
    }

    useEffect(() => {
        fetch(`${host}/news?limit=3&page=1`)
            .then(res => res.json())
            .then(res => setNews(res.data))
            .catch(err => alert(err))
    }, []);

    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <span className={style.section__title}>
                    <h3>News</h3>
                    <img src={arrow} alt="icon" />
                </span>

                <h2 className={style.section__name}>Gerícht updates</h2>

                <div className={style.section__cards__block}>
                    {
                        news?.length > 0 && news.map(news => <NewsCard news={news} key={news.news_id} />)
                    }
                </div>

                <button className={style.section__btn} onClick={handleClick}>View More</button>
            </div>
        </section>
    );
}

export default NewsSection;
