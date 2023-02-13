import React from 'react';
import style from './Projects.module.css'
import {Project} from "./project/project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Social Network'}
                             description={'sadga kdgvamdka dasvknakd sdknvnaad kdavnasdkadvs'}/>
                    <Project title={'ToDoList'}
                             description={'sadga kdgvamdka dasvknakd sdknvnaad kdavnasdkadvs kdgvamdka dasvknakd sdknvnaad'}/>
                    <Project title={'Taxi manager'}
                             description={'sadga kdgvamdka dasvknakd sdknvnaad kdavnasdkadvs'}/>
                    <Project title={'Fishing store'}
                             description={'sadga kdgvamdka dasvknakd sdknvnaad kdavnasdkadvs kdgvamdka dasvknakd sdknvnaad kdgvamdka dasvknakd sdknvnaad'}/>
                </div>
            </div>
        </div>
    );
};

