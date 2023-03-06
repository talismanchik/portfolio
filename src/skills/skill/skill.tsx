import React from 'react';
import style from './skill.module.scss'

type SkillPropsType = {
    title: string,
    description: string
    img: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <img className={style.icon} alt={'icon'} src={props.img}/>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

