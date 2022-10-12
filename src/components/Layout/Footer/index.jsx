import React, { useRef } from 'react';

import Logo from '../../../assets/footer_logo.png'
import Fb_icon from '../../../assets/fb_icon.svg'
import Tw_icon from '../../../assets/twiter_icon.svg'
import Insta_icon from '../../../assets/insta_icon.svg'

import { host } from '../../../constants'

import style from './Footer.module.scss'

const Footer = () => {
    const inpRef = useRef()

    const sendEmail = async (event) => {
        event.preventDefault()
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ subscriber_email: inpRef.current.value.trim() })
        }
        
        let res = await fetch(`${host}/subscriber`, options)
        res = await res.json()
        
        alert(res?.status === 201 ? 'Thank you for subscribe' : res.error || 'somethink went wrong')
    }

    return (
        <footer className={style.footer}>
            <div className={style.footer__agg}></div>

            <div className={style.footer__data}>
                <div className={style.footer__card}>
                    <h3 className={style.footer__card__title}>Newsletter</h3>
                    <h2 className={style.footer__card__subtitle}>Subscribe to Our Newsletter</h2>
                    <p className={style.footer__card__desc}>And never miss latest Updates!</p>
                    <form className={style.footer__card__form} onSubmit={sendEmail}>
                        <input type="email" placeholder='Email Address' ref={inpRef} />
                        <button type='submit'>Subscribe</button>
                    </form>
                </div>

                <div className={style.footer__contacts}>
                    <div className={style.footer__contacts__card}>
                        <h5>Contact Us</h5>
                        <a href="https://g.page/EaTurkishLondon?share" target='_blank' rel="noreferrer">9 W 53rd St, London, NY 10019, UK</a>
                        <a href="tel:+12123441230">+1 212-344-1230</a>
                        <a href="tel:+12125551230">+1 212-555-1230</a>
                    </div>

                    <div className={style.footer__contacts__card}>
                        <img src={Logo} alt="logo" />
                        <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/eaturkishlondon/" target={'_blank'} rel="noreferrer">
                                    <img src={Fb_icon} alt="Social media link" />
                                </a>
                            </li>
                            <li>
                                <a href="https://mobile.twitter.com/eaturkishlondon" target={'_blank'} rel="noreferrer">
                                    <img src={Tw_icon} alt="Social media link" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/eaturkish/" target={'_blank'} rel="noreferrer">
                                    <img src={Insta_icon} alt="Social media link" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={style.footer__contacts__card}>
                        <h5>Working Hours</h5>
                        <p>Monday-Friday: <br /> 08:00 am -12:00 am</p>
                        <p>Saturday-Sunday:<br /> 07:00am -11:00 pm</p>
                    </div>
                </div>

                <p className={style.footer__info}>2022 Pop online. All Rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
