import react, { Component } from "react";
import reactDom from "react-dom";
import s from './ImgContainer.module.css'
import './ImgContainer.css';

export default class ImgContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={s.pageContainer}>
                <div id="subDivOne" className={s.subDivOne}></div>
                <div id="subDivTwo" className={s.subDivTwo}></div>
                <div id="subDivThree" className={s.subDivThree}></div>
            </div>
        )}
}