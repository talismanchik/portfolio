import React from 'react';
import style from './Main.module.css'
import myPhoto from './my_photo.jpg'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span> Hi there</span>
                    <h1>I am Eugene Nesterenko</h1>
                    <p> A React Developer.</p>
                </div>
                <img className={style.photo}
                     alt={'My photo'}
                src={myPhoto}/>
                {/*<div className={style.photo}></div>*/}
            </div>

        </div>
    );
};

