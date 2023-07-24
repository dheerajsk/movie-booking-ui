
import { useEffect, useState } from "react";
import { Navbar } from "../../shared/NavBar/Navbar";
import { Banner } from "../Banner/Banner";
import { MovieCard } from "../MovieCard/MovieCard";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import {Link} from "react-router-dom";
import styles from "./Home.module.css";

export function Home(){

    const [movies, setMovies]=useState([]);

    useEffect(()=>{

        // fetch("url", cb);

        fetch("http://localhost:4000/api/movie")
            .then((res)=> res.json())
                .then(movies=>{
                    // ? ThreadPool, MainThread ?
                    setMovies(movies);
                }).catch(err=>{})
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
                           <Link to={`movie/${m._id}`}>
                                <MovieCard key={m._id} movie={m} />
                            </Link>
                        </div>
                        
                        
                        )
                }
               
               
            </div>
        </div>
        </div>
    );
}
