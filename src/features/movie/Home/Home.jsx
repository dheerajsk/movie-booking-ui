
import { Navbar } from "../../shared/NavBar/Navbar";
import { Banner } from "../Banner/Banner.module";
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
            <div>
                Here comes the movie grid
            </div>
        </div>
        </div>
    );
}