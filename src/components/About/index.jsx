import React from 'react';

import arrow from '../../assets/kapkir.svg'
import foto from '../../assets/eaturkish.png'

import style from './About.module.scss'

const AboutSection = () => {
    return (
        <div className={style.about}>
            <div className={style.about__block + ' container'}>
                <span>
                    <h3 className={style.about__title}>About Us</h3>
                    <img src={arrow} alt="icon" />
                </span>

                <p className={style.about__desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br /> Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                </p>

                <img src={foto} alt="Kafe foto" className={style.about__img} />

                <p className={style.about__desc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>
        </div>
    );
}

export default AboutSection;
