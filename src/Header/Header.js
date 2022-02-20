import react, { Component } from "react";
import reactDom from "react-dom";
import styles from './Header.module.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showHeader: false,
            headerStartOpac: 0,
            headerEndOpac: 1
        }
    }

    modifyState() {
        this.setState({
            showHeader: !this.state.showHeader,
            headerStartOpac: this.state.showHeader ? 0 : 1,
            headerEndOpac: this.state.showHeader ? 1 : 0
        });
    }

    traverseSite() {
        
    }

    showSlide() {
        this.modifyState();

        let headers = document.querySelectorAll("[data-subheader]");
        for(let i = 0; i < headers.length; i++) {
            headers[i]
            .animate({ 'opacity': [this.state.headerStartOpac, this.state.headerEndOpac] }, { duration: 1000, iterations: 1, easing: 'ease-out' })
            .onfinish = (e) => { headers.forEach((value, index) => { value.style.opacity = this.state.headerStartOpac; }) }
        }
    }

    render() {
        return (
        <nav id="header" style={styles}>
            <ul>
                <li><h2 onClick={() => { this.showSlide() }}><a>About me</a></h2></li>
                <li><h2 className={styles.headerItem} data-subheader><a>Portfolio</a></h2></li>
                <li><h2 className={styles.headerItem} data-subheader><a>Skills</a></h2></li>
                <li><h2 className={styles.headerItem} data-subheader><a>Experience and Education</a></h2></li>
                <li><h2 className={styles.headerItem} data-subheader><a href="https://github.com/VedranIsak" target="_blank">Github</a></h2></li>
            </ul>
        </nav>
    );
    }
}
