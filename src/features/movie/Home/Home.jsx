
import { useEffect, useState } from "react";
import { Navbar } from "../../shared/NavBar/Navbar";
import { Banner } from "../Banner/Banner.module";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import styles from "./Home.module.css";

export function Home(){

    const [movies, setMovies]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/api/movie")
            .then((res)=> res.json())
                .then(movies=>{
                    setMovies(movies);
                })
    },[])

    return (
        <div>
        <Navbar />
        <div className={styles.homeContainer}>
            <div className={styles.banner}>
                <Banner />
            </div>
            <SearchPanel />
            <div className="row">
                {
                    movies.map(m=>
                        <div key={m._id} className="col-md-3">
                            <a href="/movie/1">
                            <MovieCard key={m._id} movie={m} />
                        </a>
                        </div>
                        
                        )
                }
               
               
            </div>
        </div>
        </div>
    );
}