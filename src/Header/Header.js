import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './Header.module.css'
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.height = window.innerHeight;
    }

    traverseSite(traverseHeight) {
        window.scrollTo({
            top: traverseHeight * this.height,
            behavior: 'smooth'
        });
    }

    render() {
        return (
        <nav id="header" style={styles}>
            <ul>
                <li><h2 onClick={() => { this.traverseSite("1"); }}><a>Portfolio</a></h2></li>
                <li><h2 onClick={() => { this.traverseSite("2"); }}><a>Skills</a></h2></li>
                <li><h2 onClick={() => { this.traverseSite("3") }}><a>Experience and Education</a></h2></li>
                <li><h2><a href="https://github.com/VedranIsak" target="_blank">Github</a></h2></li>
            </ul>
        </nav>
    );
    }
}
