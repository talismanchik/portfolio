import React from 'react';
import style from './project.module.scss'

type ProjectPropsType = {
    title: string;
    description: string
    style: {
        backgroundImage:string
    }
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectContainer}>
                <div className={style.imgContainer} style={props.style}>
                    <button className={style.link}>Watch project</button>
                </div>
                <div className={style.projectInform}>
                    <h3 className={style.title}>{props.title}</h3>
                    <p className={style.description}>{props.description}</p>
                </div>
        </div>
    );
};


