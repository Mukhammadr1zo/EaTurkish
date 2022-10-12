import React from 'react';

import Map from '../Map'

import style from './MapSection.module.scss'

const MapSection = () => {
    return (
        <section className={style.section}>
            <div className={style.section__block + ' container'}>
                <h3 className={style.section__title}>Find us by card</h3>
                <Map />
            </div>
        </section>
    );
}

export default MapSection;
