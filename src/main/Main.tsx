import React from 'react';
import style from './Main.module.scss'
import myPhoto from './my_photo.jpg'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <img className={style.photo}
                     alt={'My photo'}
                     src={myPhoto}/>
                <div className={style.text}>
                    <h3> HI THERE !</h3>
                    <h1>I'M <span>EUGENE NESTERENKO</span></h1>
                    <p> I'm a React Developer based in Minsk, Belarus. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                <div className={style.mainButton}>
                    <button className={style.moreAboutButton}>MORE ABOUT</button>
                    <button className={style.portfolioButton}>PORTFOLIO</button>
                </div>
                </div>

            </div>

        </div>
    );
};

