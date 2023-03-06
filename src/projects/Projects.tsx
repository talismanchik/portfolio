import React from 'react';
import style from './Projects.module.scss'
import {Project} from "./project/project";
import Title from "../common/Title/Title";
import socialImg from '../assets/image/social_network.png'
import todoListImg from '../assets/image/todoList.png'
import taxiImg from '../assets/image/taxi_manager.png'
import fishingImg from '../assets/image/fishing.png'

export const Projects = () => {
    const socialStyle = {
        backgroundImage: `url(${socialImg})`
    }
    const todoListStyle = {
        backgroundImage: `url(${todoListImg})`
    }
    const taxiStyle = {
        backgroundImage: `url(${taxiImg})`
    }
    const fishingStyle = {
        backgroundImage: `url(${fishingImg})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title title={'MY '} spanTitle={'PROJECTS'}
                       subtitle={'A FEW RECENT CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.'}/>
                <div className={style.projects}>
                    <Project style={socialStyle}
                             title={'Social Network'}
                             description={'sadga kdgvamd ka dasvknak d sdknvnaad kdavnasdkadvs'}/>
                    <Project style={todoListStyle}
                             title={'ToDoList'}
                             description={'sadga kdgvamd ka dasvknakd sdknvn aad kdavnasdkadvs kdgvamdka dasvknakd sdknvnaad'}/>
                    <Project style={taxiStyle}
                             title={'Taxi manager'}
                             description={'sadga kdgv amdka dasvknakd sdknvnaad kda vnasdkadvs'}/>
                    <Project style={fishingStyle}
                             title={'Fishing store'}
                             description={'sadga kdgvamdka dasvknakd sdknvna ad  kdgvamdka das vknakd sdknvnaad kdgvamdka dasvknakd sdknvnaad'}/>
                </div>
            </div>
        </div>
    );
};

