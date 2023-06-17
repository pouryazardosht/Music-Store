import React from 'react';
import styles from "./Styles/Banner.module.css";
import bannerImg from "../images/Synth pic 1.png"
const Banner = () => {
    return (
        <div>
            <img className={styles.container} src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;