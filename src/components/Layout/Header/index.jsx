import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../../../assets/logo.png'

import style from './Header.module.scss'

const Header = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/admin')
    }

    return (
        <nav className={style.nav}>
            <div className={style.nav__block + ' container'}>
                <Link to="/" className={style.nav__logo}>
                    <img src={Logo} alt="logo" />
                </Link>

                <ul className={style.nav__links}>
                    <li><Link to={'menu'}>Menu</Link></li>
                    <li><Link to={'news'}>News</Link></li>
                    <li><Link to={'about'}>About Us</Link></li>
                    <li><Link to={'contact'}>Contact Us</Link></li>
                </ul>

                <button onClick={handleClick} className={style.nav__btn}>Log in</button>
            </div>
        </nav>
    );
}

export default Header;
