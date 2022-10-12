import React, {useRef} from 'react';
import { host } from '../../../constants';

import style from './Form.module.scss'

const Form = () => {
    const formRef = useRef()

    const sendMessage = (e) => {
        e.preventDefault()
        const {name, email, phone, message} = formRef.current

        const body = JSON.stringify({
            client_name: name.value.trim(),
            client_phone: phone.value.trim(),
            client_email: email.value.trim(),
            message_body: message.value.trim()
        })

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        }

        fetch(`${host}/message`, options)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                alert(res.status === 201 ? 'Message delivered' : res.error || res.message)
            })
            .catch(err => alert(err.message))
        
        name.value = ''
        phone.value = ''
        email.value = ''
        message.value = ''
    }

    return (
        <form className={style.form} ref={formRef} onSubmit={sendMessage}>
            <h2 className={style.form__title}>Send Messege</h2>
            <p className={style.form__desc}>If you have any questions, you can send us an SMS or contact us by phone you can also contact us via social networks.</p>
            <div className={style.form__inputs}>
                <input type="text" placeholder='Your name' name='name'/>
                <input type="email" placeholder='Email address' name='email'/>
                <input type="number" placeholder='Phone number' name='phone'/>
                <input type="text" placeholder='Subject'/>
            </div>
            <textarea className={style.form__area} placeholder='Message' name='message'></textarea>
            <button type='submit' className={style.form__btn}>Send message</button>
        </form>
    );
}

export default Form;
