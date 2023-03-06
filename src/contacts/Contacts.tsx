import React from 'react';
import style from './Contacts.module.scss'
import Title from "../common/Title/Title";

export const Contacts = () => {
    return (
        <div  className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <Title title={'GET '} spanTitle={'IN TOUCH'} subtitle={'I’M ALWAYS OPEN TO PARTNERSHIPS.'}/>
                <form className={style.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={style.sendForm}>Send</button>
            </div>
        </div>
    );
};

