import React from 'react';
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts me</a>
        </div>
    );
};

