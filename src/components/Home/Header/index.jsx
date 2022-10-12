import React from 'react';

import Header_img from '../../../assets/header_img.png'
import scroll from '../../../assets/scroll.svg'

import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__block + ' container'}>
                <div className={style.header__info}>
                    <h3 className={style.header__info__subtitle}>Chase the new Flavour</h3>
                    <h1 className={style.header__info__title}>Chase the new Flavour</h1>
                    <p className={style.header__info__desc}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <button className={style.header__info__btn}>Explore Menu</button>
                </div>
                <div>
                    <img src={Header_img} alt="foto" />
                </div>
            </div>

            <div className={style.header__scroll}>
                <img src={scroll} alt="scroll icon" />
                <span>scroll</span>
            </div>
        </header>
    );
}

export default Header;
