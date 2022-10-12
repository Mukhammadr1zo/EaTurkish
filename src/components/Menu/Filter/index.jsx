import React, { useEffect, useState } from 'react';

import { host } from '../../../constants';

import style from './Filter.module.scss'

const Filter = ({ handleClick }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`${host}/categories`)
            .then(res => res.json())
            .then(res => setCategories(res.data))
            .catch(err => alert(err))
    }, []);

    return (
        <div className={style.filter}>
            <h3 className={style.filter__name}>Our Regular Menu Pack</h3>
            <span>
                {
                    categories.length > 0 && categories.map(ctg => (
                        <button
                            className={style.filter__item}
                            onClick={() => handleClick(ctg.category_name !== 'All' ? ctg.category_id : '')}
                            key={ctg.category_id}>
                            {
                                ctg.category_name
                            }
                        </button>
                    ))
                }
            </span>
        </div>
    );
}

export default Filter;
