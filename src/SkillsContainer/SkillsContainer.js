import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './SkillsContainer.module.css';

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
                <div className={styles.slideSwitcherContainer}>
                    <div><h5 onClick={() => { this.switchImage("ASP.NET Core MVC"); }}>ASP.NET Core MVC</h5></div>
                    <div><h5 onClick={() => { this.switchImage("WPF"); }}>WPF</h5></div>
                    <div><h5 onClick={() => { this.switchImage("SQL Server"); }}>SQL Server</h5></div>
                    <h2>Skills</h2>
                    <div><h5 onClick={() => { this.switchImage("Frontend"); }}>Frontend</h5></div>
                    <div><h5 onClick={() => { this.switchImage("React"); }}>React</h5></div>
                    <div><h5 onClick={() => { this.switchImage("Version Control") }}>Version Control</h5></div>
                </div>
                <div className={styles.semiPageContainer}>
                    <div className={styles.imgPosContainer}>
                        <div id="0-img-pos"></div>
                        <div id="1-img-pos"></div>
                        <div id="2-img-pos"></div>
                        <div id="3-img-pos"></div>
                        <div id="4-img-pos"></div>
                        <div id="5-img-pos"></div>
                    </div>
                    <div id="slide-container" className={styles.slideContainer}>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-one" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>ASP.NET Core MVC</h2>
                            <p>My professional work with <strong>ASP.NET Core MVC</strong> mainly revolves around managing the database communication between the companies' database and the backend.
                                This entails mostly managing queries, both in the traditional way and with <strong>Entity Framework</strong>. When it comes to my work in my spare time I often build ASP.NET Core MVC Projects from scratch
                                where the frontend is what I lay more focus on. For instance <a>this</a> website is a site I made with ASP.NET Core MVC and jQuery. I rarely dabble with Razor Pages or Blazer as I pretty much always stick
                                to MVC due to how straight forward and structured that particular Framework is.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-two" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>WPF</h2>
                            <p>Apart from working with ASP.NET Core MVC I also spend quite a bit of time working with, and maintaining, several in-house applications written with WPF.
                                My work with these applications mainly revolves around optimizing the backend. This entails updating the database, ensuring security enforcement in regards to, for instance, clearence levels and sanctioned countries.
                                I've also studied WPF in school, along with the MVVM design pattern. Meaning that I have a good amount of knowledge in this stack.</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-three" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>SQL Server</h2>
                            <p>My work with SQL Server</p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-four" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>HTML, CSS, Javascript & jQuery</h2>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-five" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>React</h2>
                            <p></p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <div id="skill-img-six" className={styles.imgContainer}></div>
                        <div className={styles.textContainer}>
                            <h2>Git, GitHub & Azure Devops</h2>
                            <p></p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}