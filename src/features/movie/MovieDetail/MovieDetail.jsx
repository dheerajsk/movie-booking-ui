import { Navbar } from "../../shared/NavBar/Navbar";
import { MovieHeader } from "../MovieHeader/MovieHeader";
import styles from "./MovieDetail.module.css";

export function MovieDetail(){

    return(
        <div>
             <Navbar />
             <div className={styles.detail}>
                <section className={styles.header}>
                    <img className={styles.headerImg} src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" />
                </section>
                <section className={styles.movieHeader}>
                    <MovieHeader />
                </section>
                <section className={styles.banner}>
                <a href="#" className={styles.btnBookTickets}>Book Tickets</a>
                </section>
             </div>
        </div>
    )
}