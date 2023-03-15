
import styles from "./SeatLayout.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookingActions } from "../../../store/reducers/BookingReducer";

export function SeatLayout(){

    const [length4, setLength4]=useState([1,1,1,1]);
    const [silverPlus, setSilverPlus]=useState(['G', 'F']);
    const availableSeats=['F6','F7','F10','F3', 'F2','G1','G2', 'G6', 'G9', 'G10']
    const [length6,setLength6]=useState([1,1,1,1,1,1]);
    // const [selectedSeats, setSelectedSeats]=useState([]);
    const selectedSeats=[];
    const dispatch = useDispatch();

    function selectSeat(seatNo){
        dispatch(bookingActions.select(seatNo));
        // const copyOfselectedSeats = [...selectedSeats];
        // if(copyOfselectedSeats.includes(seatNo)){
        //     const index = copyOfselectedSeats.indexOf(seatNo);
        //     copyOfselectedSeats.splice(index, 1);
        // }else{
        //     copyOfselectedSeats.push(seatNo);
        // }
        // setSelectedSeats(copyOfselectedSeats);


    }

    return(
        <table>
                    {
                        silverPlus.map(r=>
                            <tr className={styles.seatRow}>
                                <td>{r}</td>
                                <td className={styles.seatCol}>
                                {
                                length4.map((item, i)=>
                                    availableSeats.includes(r+(i+1)) ?
                                    <button onClick={()=>{selectSeat(r+(i+1))}} 
                                    className={
                                        selectedSeats.includes(r+(i+1)) ? styles.selectedSeats
                                            : styles.availableSeats
                                        }>
                                        <span className={styles.seatNo}>{r+(i+1)}</span>
                                    </button> :
                                    <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
                                    </img>   
                                    )
                                 }
                                </td>
                                <td className={styles.seatCol}>
                                {
                                length6.map((item, i)=>
                                availableSeats.includes(r+(i+5)) ?
                                <button onClick={()=>{selectSeat(r+(i+5))}} 
                                    className={
                                        selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
                                            : styles.availableSeats
                                        }>
                                        <span className={styles.seatNo}>{r+(i+5)}</span>
                                    </button>  :
                                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
                                </img> 
                                    )
                                }
                                </td>
                                <td className={styles.seatCol}>
                                {
                                length4.map((item, i)=>
                                availableSeats.includes(r+(i+11)) ?
                                <button onClick={()=>{selectSeat(r+(i+5))}} 
                                className={
                                    selectedSeats.includes(r+(i+5)) ? styles.selectedSeats
                                        : styles.availableSeats
                                    }>
                                    <span className={styles.seatNo}>{r+(i+5)}</span>
                                </button>  :
                                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png">
                                </img> 
                                    )
                                }
                                </td>
                                <td>{r}</td>
                    </tr>
                            )
                    }
                    
                </table>
    );
}