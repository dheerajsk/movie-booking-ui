import { Navbar } from "../../shared/NavBar/Navbar";
import { MovieHeader } from "../MovieHeader/MovieHeader";
import styles from "./MovieDetail.module.css";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function MovieDetail(){

    const [movie, setMovie] = useState({});

    // 1. capture movie id.
    const {id} = useParams();
    //id = "64d6331fa891c4fc5f168d5a";

    // 2. call api to get movie details.
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/movies/"+id)
            .then(res=>{
                return res.json();
            })
                .then(parsedResponse=>{
                    setMovie(parsedResponse);
                });
        // async function callAPI(){
        //     const response = await fetch("http://localhost:4000/api/movie/"+id);
        //     const parsedResponse = await response.json();
        //     setMovie(parsedResponse);
        // }
        // callAPI();
        
    },[])

    return(
        <div>
             <Navbar />
             <div className={styles.detail}>
                <section className={styles.header}>
                    <img className={styles.headerImg} src={movie.imageUrl} alt="" />
                </section>
                <section className={styles.movieHeader}>
                    <MovieHeader movie={movie} />
                </section>
                <section className={styles.banner}>
                    <span className={styles.actors}>{movie.starring_actors}</span>
                <a href={`${id}/ticketPlan`} className={styles.btnBookTickets}>Book Tickets</a>
                </section>
             </div>
        </div>
    )
}