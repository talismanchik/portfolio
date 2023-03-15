import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/Title/Title";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={'GET '} spanTitle={'IN TOUCH'} subtitle={'I’M ALWAYS OPEN TO PARTNERSHIPS.'}/>
                <div className={style.container}>
                    <div className={style.contactsBox}>
                        <div className={style.contacts}>
                            <div className={style.contactBox}>
                                <h6>
                                    <div className={style.contactTitle}>
                                        Phone
                                    </div>
                                    <div className={style.contactItems}>
                                        <span className={style.icon}>
                                        <PhoneIcon fontSize={"small"}/>
                                    </span>
                                        <span>
                                +375 (29) 524 41 16
                                </span>
                                    </div>
                                </h6>
                            </div>
                            <div className={style.contactBox}>
                                <h6>
                                    <div className={style.contactTitle}>
                                        Email
                                    </div>
                                    <div className={style.contactItems}>
                                         <span className={style.icon}>
                                        <MailOutlineIcon fontSize={'small'}/>
                                    </span>
                                        <span>
                                    talismanchik.by@gmail.com
                                </span>
                                    </div>
                                </h6>
                            </div>
                            <div className={style.contactBox}>
                                <h6>
                                    <div className={style.contactTitle}>
                                        Instagram
                                    </div>
                                    <div className={style.contactItems}>
                                        <span className={style.icon}>
                                            <InstagramIcon fontSize={'small'}/>
                                        </span>
                                        <span>
                                    eugene_nest
                                </span>
                                    </div>
                                </h6>
                            </div>
                            <div className={style.contactBox}>
                                <h6>
                                    <div className={style.contactTitle}>
                                        linkedin
                                    </div>
                                    <div className={style.contactItems}>
                                        <span className={style.icon}>
                                            <LinkedInIcon fontSize={'small'}/>
                                        </span>
                                        <span>
                                    eugene-nesterenko-2a25b2265
                                </span>
                                    </div>
                                </h6>
                            </div>
                        </div>

                    </div>
                    <div className={style.formContainer}>
                        <p>
                            If you have any suggestion, project or even you want to say Hello.. please fill out the form
                            below and I will reply you shortly.
                        </p>
                        <form className={style.contactForm}>
                            <div className={`${style.formRow}`}>
                                <div className={style.formGroup}>
                                    <input className={style.formControl}
                                           placeholder={'YOUR NAME'}/>
                                </div>
                                <div className={style.formGroup}>
                                    <input className={style.formControl}
                                           placeholder={'YOUR EMAIL'}/>
                                </div>
                                <div className={`${style.formGroup} ${style.textArea}`}>
                                    <textarea className={`${style.formControl} ${style.formControlTextArea}`}
                                              placeholder={'YOUR MESSAGE'}/>
                                </div>
                            </div>
                            <div className={style.sendForm}>
                                <button className={style.button}>SEND MESSAGE</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

