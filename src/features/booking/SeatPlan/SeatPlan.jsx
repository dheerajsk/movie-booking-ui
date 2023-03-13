import styles from "./SeatPlan.module.css";
import {Navbar} from "../../shared/NavBar/Navbar";
import {Link} from "react-router-dom";
import { useState } from "react";
import { BookingSummary } from "../BookingSummary/BookingSummary";

export function SeatPlan(){

    const [length4, setLength4]=useState([1,1,1,1]);
    const [silverPlus, setSilverPlus]=useState(['G', 'F']);
    const availableSeats=['F6','F7','F10','F3', 'F2','G1','G2', 'G6', 'G9', 'G10']
    const [length6,setLength6]=useState([1,1,1,1,1,1]);

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
            <section className={styles.seatPlan}>
                <p className={styles.screenHeader}>
                    <hr className={styles.topLine} />
                    <h2>SCREEN</h2>
                    <hr />
                </p>
                <img width="50%" src="http://pixner.net/boleto/demo/assets/images/movie/screen-thumb.png"
                ></img>
                 <p className={styles.silverPlus}>
                    <hr className={styles.topLine} />
                    <h4>SLIVER PLUS</h4>
                    <hr />
                </p>
                <table>
                    {
                        silverPlus.map(r=>
                            <tr className={styles.seatRow}>
                                <td>{r}</td>
                                <td className={styles.seatCol}>
                                {
                                length4.map((item, i)=>
                                 <img src=
                                 {
                                    availableSeats.includes(r+(i+1)) ?
                                    "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                    "http://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                                 }
                                 >
                                 </img>   
                                    )
                                 }
                                </td>
                                <td className={styles.seatCol}>
                                {
                                length6.map((item, i)=>
                                    <img src=
                                    {
                                       availableSeats.includes(r+(i+1)) ?
                                       "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                       "http://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                                    }
                                    >
                                    </img>  
                                    )
                                }
                                </td>
                                <td className={styles.seatCol}>
                                {
                                length4.map((item, i)=>
                                    <img src=
                                    {
                                       availableSeats.includes(r+(i+1)) ?
                                       "https://pixner.net/boleto/demo/assets/images/movie/seat01-free.png":
                                       "http://pixner.net/boleto/demo/assets/images/movie/seat01.png"
                                    }
                                    >
                                    </img>  
                                    )
                                }
                                </td>
                                <td>{r}</td>
                    </tr>
                            )
                    }
                    
                </table>

                <BookingSummary />
            </section>
        </div>
    );
}