import React from 'react';

import Links from '../Links'
import Form from '../Form'

import arrow from '../../../assets/kapkir.svg'

import style from './ContactSection.module.scss'

const ContactSection = () => {
    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
            <span>
                <h3 className={style.section__title}>Contact Us</h3>
                <img src={arrow} alt="icon" />
            </span>

            <div className={style.section__contacts}>
                <Links />
                <Form />
            </div>
            </div>
        </section>
    );
}

export default ContactSection;
