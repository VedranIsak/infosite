import { clear } from "@testing-library/user-event/dist/clear";
import react, { Component } from "react";
import reactDom from "react-dom";
import './Arrow.css';
import styles from './Arrow.module.css'

export default class Arrow extends Component {
    constructor(props) {
        super(props);

        this.height = window.innerHeight;
        this.state = {
            isHidden: false
        };
    }

    sideBarToggle() {
        let sideBar = document.getElementById("side-bar-container");
        let aloneArrow =  document.getElementById("alone-arrow");

        this.setState((prevState) => {
            return {
                isHidden: !prevState.isHidden
            }
        });

        if(this.state.isHidden) {
            sideBar.style.display = "none";
            sideBar.style.opacity = "0";
            aloneArrow.style.display = "block";
            aloneArrow.style.opacity = "0";
            this.fade(aloneArrow);
        }
        else {
            sideBar.style.display = "block";
            sideBar.style.opacity = "0";
            aloneArrow.style.display = "none";
            aloneArrow.style.opacity = "0";
            this.fade(sideBar);
        }
    }

    fade(element) {
        let int = setInterval(() => {
            element.style.opacity = parseFloat(element.style.opacity) + 0.1;
            if(parseFloat(element.style.opacity) === 1) {
                clearInterval(int);
            }
        }, 25);
    }

    traverseSite(traverseHeight) {
        if(traverseHeight === "1")
            document.getElementById("port-container").scrollIntoView({"behavior": "smooth"});
        else if(traverseHeight === "2") 
            document.getElementById("skills-container").scrollIntoView({"behavior": "smooth"});
        else if(traverseHeight === "3")
            document.getElementById("exp-container").scrollIntoView({"behavior": "smooth"});
        else if(traverseHeight === "4")
            document.getElementById("my-work-container").scrollIntoView({"behavior": "smooth"});
    }

    render() {
        return(
            <>
                <div className={styles.sideBarContainer} id="side-bar-container">
                    <div className={styles.headerContainer}>
                        <div><h2 onClick={() => { this.traverseSite("1"); }}>Portfolio</h2></div>
                        <div><h2 onClick={() => { this.traverseSite("2"); }}>Skills</h2></div>
                        <div className={styles.arrowContainer}>
                            <div id="side-bar-arrow" className={styles.arrow} onClick={() => { this.sideBarToggle(); }} ></div>
                        </div>
                        <div><h2 onClick={() => { this.traverseSite("3"); }}>Exp & Edu</h2></div>
                        <div><h2 onClick={() => { this.traverseSite("4"); }}>My work</h2></div>
                    </div>
                </div>
                <div className={styles.arrow} id="alone-arrow" onClick={() => { this.sideBarToggle(); }}></div>
            </>
        )
    }
}