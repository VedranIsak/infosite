import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './GallContainer.module.css';
import './GallContainer.css';

export default class GallContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textContainers: 
            [
                { id: "react-website-text", isHidden: true },
                { id: "dotnet-website-text", isHidden: true },
                { id: "chat-app-text", isHidden: true },
                { id: "angular-website-text", isHidden: true}
            ],
            imgContIsClicked: false
        }
    }

    updateState(elementId) {
        let targetObj = this.getCurrentTextCon(elementId);
        targetObj.isHidden = !targetObj.isHidden;

        this.setState((prevState) => {
            return {
                targetObj
            }
        });
        
        this.setState(prevState => ({
            imgContIsClicked: true
        }));

        setTimeout(() => {
            this.setState((prevState) => ({
                imgContIsClicked: false
            }));
        }, 500);
    }

    slideDown(elementId) {
        let element = document.getElementById(elementId);
        element.style.top = '-100%';

        let int = setInterval(() => {
            let currentTop = parseInt(element.style.top) + 5;
            element.style.top = currentTop + '%';
            if(element.style.top === '0%') {
                clearInterval(int);
            }
        }, 15);
    }

    slideUp(elementId) {
        let element = document.getElementById(elementId);
        element.style.top = '0%';

        let int = setInterval(() => {
            let currentTop = parseInt(element.style.top) - 5;
            element.style.top = currentTop + '%';
            if(element.style.top === '-100%') {
                clearInterval(int);
            }
        }, 15);
    }

    getCurrentTextCon(elementId) {
        for(let i = 0; i < this.state.textContainers.length; i++) {
            if(this.state.textContainers[i].id === elementId) {
                return this.state.textContainers[i];
            }
        }
        return null;
    }

    slideIn(elementId) {
        if(this.state.imgContIsClicked) 
            return;

        this.getCurrentTextCon(elementId).isHidden ? this.slideDown(elementId) : this.slideUp(elementId);
        this.updateState(elementId);
    }

    render() {
        return (
        <div id="my-work-container" className={styles.fullPageContainer}>
            <h4 id="gallery-help-header">My work</h4>
            <div id="gallery-container" className={styles.galleryContainer}>
                <div id="react-website-container" className={styles.imgContainer} onClick={() => { this.slideIn("react-website-text"); }}>
                    <div id="react-website-text" className={styles.textContainer}>
                        <h4><a href="https://github.com/VedranIsak/infosite" target="_blank">React Website - written during the spring of 2022</a></h4>
                    </div>
                </div>
                <div id="dotnet-website-container" className={styles.imgContainer} onClick={() => { this.slideIn("dotnet-website-text"); }}>
                    <div id="dotnet-website-text" className={styles.textContainer}>
                        <h4><a href="https://github.com/VedranIsak/YugoslavWars" target="_blank">ASP.NET Core website - written during the fall of 2021</a></h4>
                    </div>
                </div>
                <div id="chat-app-container" className={styles.imgContainer} onClick={() => { this.slideIn("chat-app-text"); }}>
                    <div id="chat-app-text" className={styles.textContainer}>
                        <h4><a href="https://github.com/VedranIsak/.NET-Chat-Application" target="_blank">Chat application - written during the fall of 2020</a></h4>
                    </div>
                </div>
                <div id="angular-website-container" className={styles.imgContainer} onClick={() => { this.slideIn("angular-website-text"); }}>
                    <div id="angular-website-text" className={styles.textContainer}>
                        <h4><a href="https://github.com/VedranIsak/Angular-Material-Prototype" target="_blank">Angular website - written during the fall of 2020</a></h4>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}