import react, { Component, createElement } from "react";
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
                <Table rowAmount={this.props.pTexts.length == this.props.hTexts.length ? this.props.pTexts.length : 0} pTexts={this.props.pTexts} hTexts={this.props.hTexts} imgIds={this.props.imgIds} />
                <Circle hrefs={this.props.hrefs} aTexts={this.props.aTexts} hCircle={this.props.circleHeader} />
            </div>
        );
    }
}

function Table({rowAmount, pTexts, hTexts, imgIds}) {
    let rows = [];

    for(let i = 0; i < rowAmount; i++) {
        let p = createElement('p', { 'key': `p-${i}`, 'style': { 'fontFamily': 'Montserrat Alternates, cursive, sans-serif', 'color': 'white', 'padding': '15px' } }, pTexts[i]);
        let div = createElement('div', { 'key': `div-${i}`, 'style': { 'height': '100%', 'width': '100%' } }, p);
        let h3 = createElement('h3', {  'key': `h3-${i}`, 'id': imgIds[i], 'style': { 'color': 'white', 'fontFamily': 'Montserrat Alternates, cursive, sans-serif', 'paddingTop': '15px', 'textAlign': 'center', 'width': '35%' } }, hTexts[i]);
        let td = createElement('td', { 'key': `td-${i}`, 'style': { 'height': '100%', 'width': '100%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignTtems': 'center', 'border': '1px solid white' } }, [h3, div])
        let tr = createElement('tr', { 'key': `tr-${i}`, 'style': { 'background': 'rgba(255, 255, 255, 0.075)', 'height': '25%' } }, td);
        rows.push(tr);
    }

    return (
        <>
            <table className="port-table">
                <tbody className="port-table-body">
                    {rows}
                </tbody>
            </table>
        </>
    );
}

function Circle({aTexts, hrefs, hCircle}) {
    return(
            <>
                <div data-id="skills-container" className={styles.skillsContainer}>
                    <div className={styles.linkHelpContainer}>
                        <h2 className="exp-more-header">{hCircle}</h2>
                        <h3 className="exp-more-text">Use the circle below!</h3>
                    </div>
                    <div className={styles.skillsShowCaseCircle}>
                        <div className={styles.halfCaseCircle}>
                            <div className="first-skill">
                                <a href={hrefs[0]} target="_blank">{aTexts[0]}</a>
                            </div>
                            <div className="second-skill">
                                <a href={hrefs[1]} target="_blank">{aTexts[1]}</a>
                            </div>
                        </div>
                        <div className={styles.halfCaseCircle}>
                            <div className="third-skill">
                                <a href={hrefs[2]} target="_blank">{aTexts[2]}</a>
                            </div>
                            <div className="fourth-skill">
                                <a href={hrefs[3]} target="_blank">{aTexts[3]}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}