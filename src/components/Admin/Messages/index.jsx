import React, { useEffect, useState } from 'react';

import MessageItem from '../MessageItem'

import { host } from '../../../constants';
import style from './Messages.module.scss'

const Messages = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch(`${host}/messages`)
            .then(res => res.json())
            .then(res => setMessages(res.data))
            .catch(err => alert(err))
    }, []);

    const deleteItem = (message_id) => {
        setMessages(state => state.filter(el => el.message_id !== message_id))
    }

    return (
        <div className={style.messages}>
            <div className={style.messages__nav}>
                <h2>Messages</h2>
            </div>

            <div className={style.messages__container}>
                <div>
                    {
                        messages?.length > 0 && messages.map(message => <MessageItem message={message} key={message.message_id} func={deleteItem} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Messages;
