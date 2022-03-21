import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './SkillsContainer.module.css';
import './SkillsContainer.css';

export default class SkillsContainer extends Component {
    constructor(props) {
        super(props);

        this.imageClickButtons = 
        [
            ["ASP.NET Core MVC", 0],
            ["WPF", 1], 
            ["SQL Server", 2], 
            ["Frontend", 3],
            ["React", 4],
            ["Version Control", 5]
        ];

        this.slideContainer = document.getElementById("slide-container");
        this.currentImg = 0;
    }

    switchImage(imageName) {
        for(let i = 0; i < this.imageClickButtons.length; i++) {
            if(this.imageClickButtons[i][0] === imageName) {
                document.getElementById("slide-container").style.marginLeft = `-${this.imageClickButtons[i][1]}00%`;
            }
        }
    }

    render() {
        return(
            <div className={styles.pageContainer}>
                <div id="slideSwitcherContainer" className={styles.slideSwitcherContainer}>
                    <div className="switchImg" onClick={() => { this.switchImage("ASP.NET Core MVC"); }}><h5>ASP.NET Core MVC</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("WPF"); }}><h5>WPF</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("SQL Server"); }}><h5>SQL Server</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("Frontend"); }}><h5>Frontend</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("React"); }}><h5>React</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("Version Control") }}><h5>Version Control</h5></div>
                </div>
                <div id="semiPageContainer" className={styles.semiPageContainer}>
                    <div id="slide-container" className={styles.slideContainer}>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-one" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">ASP.NET Core MVC</h2>
                            <p className="skill-text-container">My professional work with <strong>ASP.NET Core MVC</strong> mainly revolves around managing the database communication between the companies' database and the backend.
                                This entails mostly managing queries, both hardcoded queries and <strong>Entity Framework</strong>. When it comes my work in my leisure time I often build ASP.NET Core MVC Projects from scratch
                                where the frontend is what I lay most of my focus on. Although I do also, from time to time, hook up the backend to a local database.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-two" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">WPF</h2>
                            <p className="skill-text-container">Apart from working with ASP.NET Core MVC I also spend quite a bit of time working with, and maintaining, several in-house applications written with WPF.
                                My work with these applications mainly revolves around optimizing the backend. This entails updating the database, ensuring security enforcement in regards to, for instance, clearence levels.
                                I've also studied WPF in school where I focused on learning MVVM. So I can confidently say that I have a good knowledge about this stack.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-three" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">SQL Server</h2>
                            <p className="skill-text-container">My work with SQL Server consists of mainly two fields. The first is editing existing tables in the company database, to ensure that they stay up to date. The second is
                             editing raw SQL queries that are used in several areas within my companies' applications. I also monitor a SQL Server Agent job, that we use for an API call to fetch data from the Swedish environmental company Svanen.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-four" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">HTML, CSS, Javascript & jQuery</h2>
                            <p className="skill-text-container">Since I like frontend development the most, these languages are naturally close to my heart.
                            I most often, when working with frontend technologies, spend  my time fixing bugs related to jQuery Ajax-calls. 
                            Albeit I do from time to time implement new features, both with these languages and with XAML within WPF.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-five" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">React</h2>
                            <p className="skill-text-container">My work with React has exclusively been within my leisure time, with private projects, such as this very website. 
                            I like React, mainly due to how lightweight it is and therefore how easy it is to use.
                            Due to that and due to how popular React is I've decided to learn as much React as I possibly can on my spare time. 
                            This website happens to be one of the steps I've taken to achieve that goal.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-six" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">Git, GitHub & Azure Devops</h2>
                            <p className="skill-text-container">I use Git on a daily basis, both at work and at home. I mainly just focus on simple branch management, keeping a master branch and using diverting branches for fixes and additions to the codebase. 
                            I use GitHub for my private projects while I use Azure Devops at work to coordinate my pushes (and the following pull requests =)) with my colleagues.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}