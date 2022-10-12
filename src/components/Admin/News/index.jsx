import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { host } from '../../../constants';
import NewsItem from '../NewsItem';

import style from './News.module.scss'

const News = () => {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        fetch(`${host}/news`)
            .then(res => res.json())
            .then(res => setNews(res.data))
            .catch(err => alert(err))
    }, []);

    const deleteItem = (news_id) => {
        setNews(state => state.filter(el => el.news_id !== news_id))
    }

    return (
        <div className={style.news}>
            <div className={style.news__nav}>
                <h2>News</h2>
                <Link to={'/admin/newsupload'}>+  add anouncement</Link>
            </div>

            <div className={style.news__container}>
                <div>
                    {
                        news?.length > 0 && news.map(news => <NewsItem news={news} key={news.news_id} func={deleteItem} />)
                    }
                </div>
            </div> 
        </div>
    );
}

export default News;
