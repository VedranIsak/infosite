import react, { Component, createElement } from "react";
import styles from './PortContainer.module.css';
import './PortContainer.css'

export default class PortContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="port-container" className={styles.fullPageContainer}>
                <Table rowAmount={this.props.pTexts.length == this.props.hTexts.length ? this.props.pTexts.length : 0} pTexts={this.props.pTexts} hTexts={this.props.hTexts} imgIds={this.props.imgIds} />
            </div>
        );
    }
}

function Table({rowAmount, pTexts, hTexts, imgIds}) {
    let rows = [];

    for(let i = 0; i < rowAmount; i++) {
        let p = createElement('p', { 'key': `p-${i}`, 'style': { 'color': 'white', 'padding': '15px' } }, pTexts[i]);
        let div = createElement('div', { 'key': `div-${i}`, 'style': { 'height': '100%', 'width': '100%' } }, p);
        let h3 = createElement('h3', {  'key': `h3-${i}`, 'id': imgIds[i], 'style': { 'color': 'white', 'paddingTop': '5px', 'textAlign': 'center', 'width': '100%' } }, hTexts[i]);
        let td = createElement('td', { 'key': `td-${i}`, 'style': { 'height': '100%', 'width': '100%', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'alignTtems': 'center' } }, [h3, div])
        let tr = createElement('tr', { 'key': `tr-${i}`, 'style': { 'height': '22.5%', 'width': '90%' } }, td);
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