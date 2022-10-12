import React from 'react';
import { host } from '../../../constants';

import style from './MessageItem.module.scss'

const MessageItem = ({message, func}) => {
    const handleDelete = async () => {
        await fetch(`${host}/message/${message?.message_id}`, {method: 'DELETE'})
        func(message?.message_id)
    }
    return (
        <div>
            <div className={style.item}>
                <div className={style.item__info}>
                    <p className={style.item__info__title}>{message?.client_name}</p>
                    <p className={style.item__info__desc}>{message?.message_body}</p>
                </div>
                <div className={style.item__btns}>
                    <button onClick={handleDelete}>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default MessageItem;
