import React from 'react';

import calendar from '../../../../assets/calendar.svg'
import clock from '../../../../assets/clock.svg'
import getTimes from '../../../../utils';

import style from './CommentItem.module.scss'

const CommentItem = ({message}) => {
    if(!message) return  <></>

    const {client_name: name, message_body: body, created_at:date} = message
    const {day, month, year, time} = getTimes(date)

    return (
        <div className={style.card}>
            <h3 className={style.card__title}>{name}</h3>
            <p className={style.card__desc}>{body}</p>
            <span className={style.card__date}>
                <time>
                    <img src={calendar} alt="calendar icon" />
                    {day}/{month}/{year}
                </time>
                <time>
                    <img src={clock} alt="clock icon" />
                    {time}
                </time>
            </span>
        </div>
    );
}

export default CommentItem;
