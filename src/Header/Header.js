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








        
        return (
        <nav id="header" style={styles}>
            <ul>
                <li><h2 onClick={() => { this.traverseSite("1"); }}><a>Portfolio</a></h2></li>
                <li><h2 onClick={() => { this.traverseSite("2"); }}><a>Skills</a></h2></li>
                <li><h2 onClick={() => { this.traverseSite("3"); }}><a>Exp & Edu</a></h2></li>
                <li><h2 onClick={() => { this.traverseSite("4"); }}>My Work</h2></li>
                <li><h2><a href="https://github.com/VedranIsak" target="_blank">Github</a></h2></li>
            </ul>
        </nav>
    );
    }
}
