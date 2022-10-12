import React from 'react';

import insta_icon from '../../../assets/insta_icon__photo.svg'

import style from './PhotoCard.module.scss'

const PhotoCard = () => {
    return (
        <div className={style.card}>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="food img" />
            <a href='https://www.google.com' target={'_blank'} rel="noreferrer">
                <img src={insta_icon} alt="icon" />
            </a>       
        </div>
    );
}

export default PhotoCard;
