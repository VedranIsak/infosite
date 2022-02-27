import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './PortContainer.module.css';
import './PortContainer.css'

export default class PortContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.fullPageContainer}>
                <table id="port-table">
                    <tbody>
                        <tr>
                            <td>
                                <h3 id="angular-img">Angular Website</h3>
                                <div>
                                    <p>During the fall of 2020, during my first real venture into web development, 
                                        I made a small Angular website for Region Östergötland during my internship there. I did not finish the site in time,
                                        but I managed to deliver a functioning prototype that was then forked by my employeer. The website is aimed for healthcare workers for assessing requirements for patient movement within
                                        the hospitals and healthcare facilites in which they are located.</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 id="net-image">ASP.NET Core MVC Website</h3>
                                <div>
                                    <p>During my initial stint as a .NET developer I started developing a website aimed at explaining the Yugoslav wars during my free time. The site was made with ASP.NET Core MVC and took a couple of 
                                        to develop and host. The database architecture was constructed with SQL Server and the website is hosted through.... 
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 id="wpf-image">WPF MVVM Chat Application</h3>
                                <div>
                                    <p>During my last year as a college student, I developed a multithreaded Chat Application with WPF MVVM together with a coursemate. The application
                                        is as mentioned multithreaded and can be used by two users that share the same network. We divided the work so that I mainly worked on the frontend while 
                                        my coursemate worked with the thread architecture.
                                    </p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 id="react-image">React Website</h3>
                                <div>
                                    <p>The last project I've been working at is this very site. Written with React, where I learned the framework while developing the site.</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="skills-container" className={styles.skillsContainer}>
                    <div className={styles.linkHelpContainer}>
                        <h2 id="exp-more-header">Want to learn more about these technologies?</h2>
                        <h3 id="exp-more-text">Use the circle below!</h3>
                    </div>
                    <div className={styles.skillsShowCaseCircle}>
                        <div className={styles.halfCaseCircle}>
                            <div id="first-skill">
                                <a href="https://angular.io/" target="_blank">Angular</a>
                            </div>
                            <div id="second-skill">
                                <a href="https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0" target="_blank">ASP.NET</a>
                            </div>
                        </div>
                        <div className={styles.halfCaseCircle}>
                            <div id="third-skill">
                                <a href="https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern" target="_blank">WPF MVVM</a>
                            </div>
                            <div id="fourth-skill">
                                <a href="https://reactjs.org/" target="_blank">React</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}