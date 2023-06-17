import React from 'react';
import styles from "./Styles/Navbar.module.css";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>خانه</li>
                <li>محصولات</li>
                <li>خرید اقساطی</li>
                <li>درباره ما</li>
                <li>
                    <input type="text" placeholder='جستجو...' />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;