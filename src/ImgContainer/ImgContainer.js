import react, { Component } from "react";
import reactDom from "react-dom";
import s from './ImgContainer.module.css'

export default class ImgContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={s.pageContainer}>
                <div className={s.subDivOne}></div>
                <div className={s.subDivTwo}></div>
                <div className={s.subDivThree}></div>
            </div>
        )}
}