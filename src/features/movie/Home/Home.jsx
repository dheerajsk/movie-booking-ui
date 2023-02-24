
import { Navbar } from "../../shared/NavBar/Navbar";
import { Banner } from "../Banner/Banner.module";
import styles from "./Home.module.css";

export function Home(){
    return (

        <div className={styles.homeContainer}>
            <Navbar />
            <Banner />
        </div>
    );
}