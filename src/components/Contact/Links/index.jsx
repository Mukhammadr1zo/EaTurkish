import React from 'react';

import phone_icon from '../../../assets/tel_icon.svg'
import mail_icon from '../../../assets/main_icon.svg'
import insta_icon from '../../../assets/insta_icon_contact.svg'
import fb_icon from '../../../assets/fb_icon_contact.svg'
import twitter_icon from '../../../assets/twitter_icon_contact.svg'

import style from './Links.module.scss'

const Links = () => {
    const contacts = [
        { icon: phone_icon, name: 'Phone Number', adress: '+1 212-344-1230', link: 'tel:+12123441230' },
        { icon: mail_icon, name: 'Email Address', adress: 'eaturkish@gmail.com', link: 'mailto:eaturkish@gmail.com' },
        { icon: insta_icon, name: 'Instagram', adress: 'eaturkish', link: 'https://www.instagram.com/eaturkish/' },
        { icon: twitter_icon, name: 'Twitter', adress: 'eaturkish', link: 'https://mobile.twitter.com/eaturkishlondon' },
        { icon: fb_icon, name: 'Facebook', adress: 'eaturkish', link: 'https://www.facebook.com/eaturkishlondon/' },
    ]

    return (
        <div className={style.contacts}>
            {
                contacts.length > 0 && contacts.map((ctc, index) => (
                    <a href={ctc.link} className={style.contact__item} key={index}>
                        <div className={style.contact__icon}>
                            <img src={ctc.icon} alt="icon" />
                        </div>
                        <div className={style.contact__info}>
                            <p className={style.contact__name}>{ctc.name}</p>
                            <p className={style.contact__adress}>{ctc.adress}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    );
}

export default Links;
