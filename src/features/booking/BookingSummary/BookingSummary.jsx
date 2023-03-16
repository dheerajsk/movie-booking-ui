
import styles from "./BookingSummary.module.css";
import {useSelector} from "react-redux";
import { bookingSelector } from "../../../store/reducers/BookingReducer";

export function BookingSummary(){

    const selectedSeats = useSelector(bookingSelector);

    return (
        <div className={styles.bookingSummary}>
            <div className={styles.item}>
                <p className={styles.itemHeader}>You Have Choosed Seat</p>
                <h3 className={styles.itemContent}>

                    {
                        selectedSeats.map((s, i)=>
                            <span>
                                {s.toString() + (
                                i==selectedSeats.length-1 ?'': ',')}
                                </span>
                            
                            )
                    }
                </h3>
            </div>
            <div className={styles.item}>
                <p className={styles.itemHeader}>Total Price</p>
                <h3 className={styles.itemContent}>$150</h3>
            </div>
            <div className={styles.item}>
                <a href="#" className={styles.btnProceed}>Proceed</a>
            </div>
        </div>
    );

}