import styles from "./SeatPlan.module.css";
import {Navbar} from "../../shared/NavBar/Navbar";
import {Link} from "react-router-dom";

export function SeatPlan(){

    return(
        <div className={styles.container}>
            <Navbar />
            <div className={styles.banner}>
                <h1>Venus</h1>
                <p>City Walk</p>
            </div>
            <div className={styles.header}>
                <p className={styles.headerLeft}>
                   <Link className={styles.backBtn}>
                       {'<< Back'}
                    </Link>
                </p>
                <p className={styles.headerCenter}>
                    <span className={styles.date}>MON, SEP 09 2020</span>
                    &nbsp;&nbsp;
                    <select className={styles.selectbar}>
                        <option value="sc1">09:40</option>
                        <option value="sc2">13:45</option>
                        <option value="sc3">15:45</option>
                        <option value="sc4">19:50</option>
                    </select>
                </p>
                <p className={styles.headerRight}>
                    <h3>05:00</h3>
                    <p>Mins Left</p>
                </p>
            </div>
            <div className={styles.seatPlan}></div>
            <div className={styles.totalPrice}></div>
        </div>
    );
}