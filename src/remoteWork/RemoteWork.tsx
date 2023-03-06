import React from 'react';
import style from './RemoteWork.module.scss'
import Title from "../common/Title/Title";

export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={style.remoteWorkContainer}>
                <Title title={'REMOTE '} spanTitle={'WORK'} subtitle={'I AM AVAILABLE FOR A REMOTE POSITION'}/>
                <button className={style.remoteWorkButton}>Press to make an offer</button>
            </div>

        </div>
    );
};

