import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./skill/skill";

export const Skills = () => {

    const jsDescription = 'bla blala vlalafldvc; wsdasdgaas sdgvmasda dsvvamda!'
    const tsDescription = 'bla blala vlalafldvc; wsdasdgaas sdgvmasda dsvvamda!'
    const reactDescription = 'bla blala vlalafldvc; wsdasdgaas sdgvmasda dsvvamda!'
    const htmlDescription = 'bla blala vlalafldvc; wsdasdgaas sdgvmasda dsvvamda!'
    const cssDescription = 'bla blala vlalafldvc; wsdasdgaas sdgvmasda dsvvamda!'

    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'Java Script'} description={jsDescription}
                           img={'https://img2.freepng.ru/20180629/sh/kisspng-javascript-programmer-programming-language-compute-node-js-5b35fcbcb36994.8496604815302647647349.jpg'}/>
                    <Skill title={'Type Script'} description={tsDescription}
                           img={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'}/>
                    <Skill title={'React'} description={reactDescription}
                           img={'https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/1631/posts/29602/preview_image/react-crash-course.jpg'}/>
                    <Skill title={'HTML'} description={htmlDescription}
                           img={'https://itproger.com/img/courses/1476977240.jpg'}/>
                    <Skill title={'CSS'} description={cssDescription}
                           img={'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'}/>
                </div>
            </div>
        </div>
    );
};

