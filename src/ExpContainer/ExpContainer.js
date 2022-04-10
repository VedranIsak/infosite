import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './ExpContainer.module.css';
import './ExpContainer.css';

export default class ExpContainer extends Component {
    render() {
        return(
            <div id="exp-container" className={styles.pageContainer}>
                <h2 className="exp-header-text">Experience and Education</h2>

                <div id="exp-img-container">
                    <div id="exp-img-1"></div>
                    <div id="exp-img-2"></div>
                </div>
                
                <div id="list-container-1" className={styles.listContainer}>
                    <ul className="listContainerList">
                        <li><h3 className="exp-text">Before starting my education I had only worked common odd jobs. I was a health care worker 
                            and for several years, on and off (while going to school), I worked in a warehouse.</h3></li>
                        <li><h3 className="exp-text">At the end of my education I interned for roughly three months at Region Ostergotland, a Swedish governmental health agency. More info about this can 
                        be found in the Skills section.</h3></li>
                        <li><h3 className="exp-text">After completing my education I began working as a full stack .NET developer in Linkoping, 
                        a position that I am still occupying currently.</h3></li>
                        <li><h3 className="exp-text">From 2018 to 2021 I studied an IT-programme at Linkoping University called "Systemvetenskap" (Information Systems) 
                            with a special focus on "Systemutveckling" (Software engineering).</h3></li>
                        <li><h3 className="exp-text">While going to college I also started learning quite a bit about frontend development on my own, as I felt the courses at school were not 
                            covering this area sufficiently. I focused on advanced CSS, jQuery, Vanilla JS DOM manipulation and the Angular framework.</h3></li>
                        <li><h3 className="exp-text">In 2021 I obtained my bachelor's degree and started my career as a software engineer with a
                         .NET developer position shortly thereafter.</h3></li>
                    </ul>
                </div>
            </div>
        );
    }
}