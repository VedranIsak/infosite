import react, { Component } from "react";
import reactDom from "react-dom";
import s from './ImgContainer.module.css'
import './ImgContainer.css';
import { clear } from "@testing-library/user-event/dist/clear";

export default class ImgContainer extends Component {
    constructor(props) {
        super(props);
    }

    hideElements() {
        let imgContainer = document.getElementById("imgContainer");
        imgContainer.style.opacity = "0";
        this.fadeInElement(imgContainer);

        let textContainer = document.getElementById("textContainer");
        textContainer.style.opacity = "0";
        this.fadeInElement(textContainer);
    }

    fadeInElement(container) {
        let int = setInterval(() => {
            container.style.opacity = parseFloat(container.style.opacity) + 0.01;
            if(container.style.opacity === 1)
                clearInterval(int);
        }, 15)
    }

    triggerLinkedinClick() {
        if(window.innerWidth > 750) {
            document.getElementById("linkedInAnchor").click();
        }
    }

    componentDidMount() {
        this.hideElements();
    }

    render() {
        return(
            <div id="imgPageContainer" className={s.pageContainer}>
                <div id="subDivOne" className={s.subDivOne}></div>
                <div id="subDivTwo" className={s.subDivTwo}>
                    <div id="textContainer">
                        <h1>Welcome to my portfolio site!</h1>
                    </div>
                    <div id="imgContainer" onClick={() => { this.triggerLinkedinClick(); }}>
                        <a id="linkedInAnchor" href="https://www.linkedin.com/in/vedran-isak-3a0a49202/" target="_blank"></a>
                        <h3>Feel free to scroll around</h3>
                        <div></div>
                    </div>
                </div>
                <div id="subDivThree" className={s.subDivThree}></div>
            </div>
        )}
}