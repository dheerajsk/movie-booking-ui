
import { Navbar } from "../../shared/NavBar/Navbar";
import { Banner } from "../Banner/Banner.module";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import styles from "./Home.module.css";

export function Home(){
    return (
        <div>
        <Navbar />
        <div className={styles.homeContainer}>
            <div className={styles.banner}>
                <Banner />
            </div>
            <SearchPanel />
            <div className="row">
                <div className="col-md-3">
                <MovieCard />
                </div>
               
            </div>
        </div>
        </div>
    );
}