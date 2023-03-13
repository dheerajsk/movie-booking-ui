
import styles from "./BookingSummary.module.css";

export function BookingSummary(){

    return (
        <div className={styles.bookingSummary}>
            <div className={styles.item}>
                <p className={styles.itemHeader}>You Have Choosed Seat</p>
                <h3 className={styles.itemContent}>D9, D10</h3>
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