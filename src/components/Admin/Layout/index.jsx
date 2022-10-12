import React from 'react';

import adminLogo from '../../../assets/admin.svg'
import menuIcon from '../../../assets/server.svg'
import newsIcon from '../../../assets/settings.svg'
import messagesIcon from '../../../assets/plus-circle.svg'

import style from './Layout.module.scss'
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = (props) => {
    console.log(props);
    const handleClick = (e) => {
        let items = document.querySelectorAll('[data-item]')
        items.forEach(item => item.classList.remove(style.admin__item__active))
        e.target.closest('div').classList.add(style.admin__item__active)
    }

    return (
        <div className={style.admin}>
            <div className={style.admin__nav}>
                <div className={style.admin__nav__logo}>
                    <Link to={'/'} >
                    <img src={adminLogo} alt="admin panel" />
                    </Link>
                    <p className={style.parag}>Admin Panel</p>
                </div>
                <Link to={'/admin'}>
                    <div className={style.admin__item + ' ' + style.admin__item__active} data-item='true' onClick={handleClick}>
                        <img src={menuIcon} alt="icon" />
                        <p>Menu </p>
                    </div>
                </Link>
                <Link to={'/admin/news'}>
                    <div className={style.admin__item} data-item='true' onClick={handleClick}>
                        <img src={newsIcon} alt="icon" />
                        <p>News </p>
                    </div>
                </Link>
                <Link to={'/admin/messages'}>
                    <div className={style.admin__item} data-item='true' onClick={handleClick}>
                        <img src={messagesIcon} alt="icon" />
                        <p>Messages</p>
                    </div>
                </Link>
                <Link to={'/admin/categories'}>
                    <div className={style.admin__item} data-item='true' onClick={handleClick}>
                        <img src={messagesIcon} alt="icon" />
                        <p>Category Post</p>
                    </div>
                </Link>
            </div>
            <div className={style.admin__container}>
                {
                    <Outlet />
                }
            </div>
        </div>
    );
}

export default AdminLayout;
