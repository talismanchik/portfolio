import React from 'react';
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <div className={style.messengers}>
                    <div className={style.messenger}></div>
                    <div className={style.messenger}></div>
                    <div className={style.messenger}></div>
                    <div className={style.messenger}></div>
                </div>
                <h5 className={style.title}>Eugene Nesterenko</h5>
                <p className={style.rights}> &#169; 2023 All rights reserved</p>
            </div>
        </div>
    );
};

