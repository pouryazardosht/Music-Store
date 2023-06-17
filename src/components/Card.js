import React, { Component } from 'react';
import styles from "./Styles/Card.module.css";
export default class Card extends Component {
    render() {
        const { image, cost, name } = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="uad" />
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>{cost}</p>
                <button className={styles.buyButton}>خرید</button>
            </div>
        )
    }
}
