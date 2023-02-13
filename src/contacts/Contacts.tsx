import React from 'react';
import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div  className={style.contactsBlock}>
            <div className={style.contactsContainer}>
<h2>Contact me</h2>
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

