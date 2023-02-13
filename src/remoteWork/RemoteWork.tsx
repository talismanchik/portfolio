import React from 'react';
import style from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={style.remoteWorkContainer}>
                <h2 className={style.title}>I am available for a remote position</h2>
                <button className={style.remoteWorkButton}>Press to make an offer</button>
            </div>

        </div>
    );
};

