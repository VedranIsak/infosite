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
                document.getElementById(`${this.currentImg}-img-pos`).style.background = "rgba(150, 150, 150, 0.1)";
                document.getElementById(`${i}-img-pos`).style.background = "white";
                this.currentImg = i;
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
                    <h2 id="skillsHeaderContainer">Skills</h2>
                    <div className="switchImg" onClick={() => { this.switchImage("Frontend"); }}><h5>Frontend</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("React"); }}><h5>React</h5></div>
                    <div className="switchImg" onClick={() => { this.switchImage("Version Control") }}><h5>Version Control</h5></div>
                </div>
                <div id="semiPageContainer" className={styles.semiPageContainer}>
                    <div className={styles.imgPosContainer}>
                        <div className="img-pos-circle" id="0-img-pos"></div>
                        <div className="img-pos-circle" id="1-img-pos"></div>
                        <div className="img-pos-circle" id="2-img-pos"></div>
                        <div className="img-pos-circle" id="3-img-pos"></div>
                        <div className="img-pos-circle" id="4-img-pos"></div>
                        <div className="img-pos-circle" id="5-img-pos"></div>
                    </div>
                    <div id="slide-container" className={styles.slideContainer}>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-one" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">ASP.NET Core MVC</h2>
                            <p className="skill-text-container">My professional work with <strong>ASP.NET Core MVC</strong> mainly revolves around managing the database communication between the companies' database and the backend.
                                This entails mostly managing queries, both in the traditional way and with <strong>Entity Framework</strong>. When it comes to my work in my spare time I often build ASP.NET Core MVC Projects from scratch
                                where the frontend is what I lay more focus on. For instance <a>this</a> website is a site I made with ASP.NET Core MVC and jQuery. I rarely dabble with Razor Pages or Blazer as I pretty much always stick
                                to MVC due to how straight forward and structured that particular Framework is.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-two" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">WPF</h2>
                            <p className="skill-text-container">Apart from working with ASP.NET Core MVC I also spend quite a bit of time working with, and maintaining, several in-house applications written with WPF.
                                My work with these applications mainly revolves around optimizing the backend. This entails updating the database, ensuring security enforcement in regards to, for instance, clearence levels and sanctioned countries.
                                I've also studied WPF in school, along with the MVVM design pattern. Meaning that I have a good amount of knowledge in this stack.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-three" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">SQL Server</h2>
                            <p className="skill-text-container">My work with SQL Server revolves around two areas. The first is editing existing tables in the company database, to ensure that they stay up to date with new models. The second is
                             editing raw SQL queries that are used in several areas of our applications. I also monitor some SQL Server Agent jobs, that we use for API calls and the like.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-four" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">HTML, CSS, Javascript & jQuery</h2>
                            <p className="skill-text-container">Since I like frontend development the most, these languages are naturally close to my heart.
                            However, I sadly do not spend a large amount of time at my job working with these. I most often, when working with the frontend, spend 
                            my time fixing bugs related to jQuery Ajax-calls. I also implement some new gui features on the company website, however this does not happen a lot.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-five" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">React</h2>
                            <p className="skill-text-container">My work with React has exclusively been work with private projects, such as this very website. I like React, how simple it is and how easy it is to use.
                            Therefore I've decided to learn as much React as I can on my spare time. And this project is one of the steps I've taken to achieve that aim.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-six" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2 className="skill-text-header">Git, GitHub & Azure Devops</h2>
                            <p className="skill-text-container">I use Git on a daily basis, both at work and at home. I mainly just focus on simple branch management, keeping a master branch and using diverting branches for fixed and additions to the code. 
                            To then merge the diverted branches into master when the time is right, after a approved pull request of course. I use GitHub on my private projects, while I use Azure Devops at work to coordinate my work with my colleagues.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}