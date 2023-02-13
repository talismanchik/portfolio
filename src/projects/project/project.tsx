import React from 'react';
import style from './project.module.css'

type ProjectPropsType = {
    title: string;
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectContainer}>
                <div className={style.imgContainer}>
                    <button className={style.link}>Watch project</button>
                </div>
            <h4 className={style.title}>{props.title}</h4>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

