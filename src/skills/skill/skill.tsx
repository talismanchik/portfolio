import React from 'react';
import style from './skill.module.scss'

type SkillPropsType = {
    title: string,
    itemProgress: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <span className={style.skillText}>{props.title}</span>
            <div className={style.chartBar}>
                <span className={style.itemProgress} style={{width: `${props.itemProgress}`}}>
                </span>
                <span>
                </span>
            </div>
        </div>
    );
};

