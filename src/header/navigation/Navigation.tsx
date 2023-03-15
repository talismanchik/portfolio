import React from 'react';
import style from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <a href="">Main</a>
            <a href="">About me</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
};

