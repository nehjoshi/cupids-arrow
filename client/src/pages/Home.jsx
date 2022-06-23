import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../scss/Home.module.scss";
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.mainBody}>
        <div className={styles.mainBodyLeft}>
          <h1>Because we care about love.</h1>
          <p className={styles.mainTagLine}>Your gateway to safe, secure and long-lasting relationships.</p>
          <Link to="/register">
            <div className={styles.button}>Start Dating</div>
          </Link>
        </div>

      </div>
    </div>
  )
}
