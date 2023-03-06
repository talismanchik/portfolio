import React from 'react';
import Title from "../common/Title/Title";
import style from './Skills.module.scss'
import photo from '../assets/image/about_me_photo.png'

export const AboutMe = () => {
    return (
        <div className={style.aboutMeBlock}>
            <Title title={'ABOUT ME'} subtitle={'I CODER, AND I LOVE WHAT I DO.'}/>
            <div className={style.aboutMeContainer}>

                <div className={style.informBlock}>
                    <div className={style.imageContainer}>
                        <img className={style.photo}
                             alt={'My photo'}
                             src={photo}
                        />
                    </div>
                    <div className={style.info}>
                        <div className={style.infoContainer}>
                            <div className={style.info1}>
                                <div><h6><span>First Name</span> Eugene</h6></div>
                                <div><h6><span>Last Name</span> Nesterenko</h6></div>
                                <div><h6><span>Birthdate</span> 06 june 1995</h6></div>
                                <div><h6><span>Nationality</span> Belarus</h6></div>
                                <div><h6><span>Experience</span> 2 years</h6></div>
                            </div>


                            <div className={style.info1}>
                                <div><h6><span>Freelance</span> Available</h6></div>
                                <div><h6><span>Languages</span> English, Russian</h6></div>
                                <div><h6><span>Phone</span> +375 29 524 41 16</h6></div>
                                <div><h6><span>Email</span> talismanchik.by@gmail.com</h6></div>
                                <div><h6><span>Telegram</span> EugeneNest</h6></div>
                            </div>
                        </div>


                            <button className={style.downloadButton}>DOWNLOAD CV</button>


                    </div>
                </div>
                <div>
                    <hr className={style.aboutSection}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

