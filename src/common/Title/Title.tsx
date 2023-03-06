import React from 'react';
import style from "./Title.module.scss";

type TitlePropsType={
    title: string
    spanTitle?: string
    subtitle: string
}

const Title = (props: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>
                {props.title}
            <span>{props.spanTitle}</span>
            </h2>
            <span>{props.subtitle}</span>
        </div>
    );
};

export default Title;