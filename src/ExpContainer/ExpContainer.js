import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './ExpContainer.module.css';
import './ExpContainer.css';

export default class ExpContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="exp-container" className={styles.pageContainer}>
                <div id="list-container-1" className={styles.listContainer}>
                    <h2 className="exp-header-text">Experience</h2>
                    <ul className="listContainerList">
                        <li><h3 className="exp-text">Before starting my education, I had only worked common jobs such as a short stint as a health care worker 
                            and several years, on and off (while going to school), as a warehouse worker in my hometown.</h3></li>
                        <li><h3 className="exp-text">At the end of my education I interned for roughly three months at Region Ostergotland, a Swedish governmental health agency. While 
                            conducting my internship I mainly worked with Figma (a popular UX tool) and the Angular framework.</h3></li>
                        <li><h3 className="exp-text">After completing my education I began working as a full stack .NET developer in Linkoping, a position that I am still occupying currently.</h3></li>
                        <li><h3 className="exp-text">The technologies I use at work are mainly ASP.NET Core MVC, WPF, jQuery and SQL Server. The job is a Full Stack position, meaning that I deep dive into 
                            everything from GUI design to database management.</h3></li>
                    </ul>
                </div>
                <div id="list-container-2" className={styles.listContainer}>
                    <h2 className="exp-header-text">Education</h2>
                    <ul className="listContainerList">
                        <li><h3 className="exp-text">From 2018 to 2021 I studied an IT-programme at Linkoping University called Systemvetenskap (Information Systems) 
                            with a special focus on Systemutveckling (Software engineering).</h3></li>
                        <li><h3 className="exp-text">During my education I started learning mainly frontend development on my own, as I felt the courses at school were not 
                            covering this area sufficiently enough. I mainly focused on advanced CSS, jQuery, Vanilla JS DOM manipulation and the React framework.</h3></li>
                        <li><h3 className="exp-text">In 2021 I obtained my bachelor's degree and started my career as a software engineer with a .NET developer job shortly thereafter.</h3></li>
                    </ul>
                </div>
            </div>
        );
    }
}