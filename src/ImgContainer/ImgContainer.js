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
                    <div id="imgContainer">
                        <h3>Feel free to scroll around</h3>
                        <div></div>
                    </div>
                </div>
                <div id="subDivThree" className={s.subDivThree}></div>
            </div>
        )}
}