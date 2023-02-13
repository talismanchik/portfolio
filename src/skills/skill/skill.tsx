import React from 'react';
import style from './skill.module.css'

type SkillPropsType = {
    title: string,
    description: string
    img: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} alt={'icon'} src={props.img}/>
            {/*<div className={style.icon}></div>*/}
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

