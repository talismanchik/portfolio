import React from 'react';
import './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Projects} from "./projects/Projects";
import {RemoteWork} from "./remoteWork/RemoteWork";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {AboutMe} from "./skills/AboutMe";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            {/*<RemoteWork/>*/}
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
