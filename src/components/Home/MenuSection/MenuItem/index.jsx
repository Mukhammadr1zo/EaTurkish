import React from 'react';

import style from './MenuItem.module.scss'

const MenuItem = ({text, handleClick}) => {
    return (
        <div className={style.item} onClick={handleClick}>
            {text}
        </div>
    );
}

export default MenuItem;
