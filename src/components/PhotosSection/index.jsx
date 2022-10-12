import React from 'react';

import arrow from '../../assets/arow.svg'
import PhotoCard from './PhotoCard';

import style from './PhotosSection.module.scss'

const PhotosSection = () => {
    return (
        <div className={style.section}>
            <div className={style.section__carusel}>
                <div className={style.section__info}>
                    <span>
                        <h3 className={style.section__title}>Instagram</h3>
                        <img src={arrow} alt="arrow icon" />
                    </span>

                    <h2 className={style.section__name}>Photo Gallery</h2>

                    <p className={style.section__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>

                    <button className={style.section__btn}>View More</button>
                </div>

                    <PhotoCard />
                    <PhotoCard />
                    <PhotoCard />
                    <PhotoCard />
                    <PhotoCard />
                    <PhotoCard />
            </div>
        </div>
    );
}

export default PhotosSection;
