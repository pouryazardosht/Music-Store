import React, { Component } from 'react'
import Card from './Card'
import styles from "./Styles/Cards.module.css"
import productImg1 from "../images/uad.png";
import productImg2 from "../images/audio-technica-at2021 1.png";
import productImg3 from "../images/Mackie-CR5-XBT-اسپیکر-مانیتورینگ-مکی-سی-آر-۵ 2.png";
import productImg4 from "../images/880pro-01 1.png";
export default class Cards extends Component {
    render() {
        return (
            <>
                <p className={styles.textContainer}>
                    محصولات پرفروش ما
                </p>
                <div className={styles.container}>
                    <Card image={productImg1} name="Universal Audio Interface" cost="800 $" />
                    <Card image={productImg2} name="Audio technica AT2021" cost="450 $" />
                    <Card image={productImg3} name="Mackie CR5 XBT 5" cost="700 $" />
                    <Card image={productImg4} name="DT 880 pro" cost="900 $" />
                </div>
            </>

        )
    }
}   
