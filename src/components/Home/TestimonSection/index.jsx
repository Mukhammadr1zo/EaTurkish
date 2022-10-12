import React, { useEffect, useState } from 'react';

import arrow from '../../../assets/arow.svg'
import CommentItem from './CommentItem';
import { host } from '../../../constants';

import style from './TestimonySection.module.scss'

const TestimonySection = () => {
    const [messages, setMessages] = useState([])
    const [page] = useState(1)

    // const changePage = () => {
    //     setPage(state => state + 1)
    // }

    useEffect(() => {
        fetch(`${host}/messages?page=${page}&limit=3`)
            .then(res => res.json())
            .then(res => setMessages(res.data))
            .catch(err => alert(err))
    }, [page]);

    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <span className={style.section__title}>
                    <h3>Testimony</h3>
                    <img src={arrow} alt="icon" />
                </span>

                <h2 className={style.section__name}>Happy customers</h2>

                <div className={style.section__cards__block}>
                {
                        messages?.length > 0 && messages.map(message => <CommentItem message={message} key={message.message_id} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default TestimonySection;
