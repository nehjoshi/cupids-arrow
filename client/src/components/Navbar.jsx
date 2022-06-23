import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../scss/Global.module.scss";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navLeftContainer}>
                <p className={styles.mainLogo}>Cupid's Arrow</p>
                <p className={styles.navLeftLink}>History</p>
                <p className={styles.navLeftLink}>Learn</p>
                <p className={styles.navLeftLink}>Privacy Policy</p>
                <p className={styles.navLeftLink}>Help</p>
            </div>
            <div className={styles.navLinks}>
                <p className={styles.navLink}>About</p>
                <p className={styles.navLink}><Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}