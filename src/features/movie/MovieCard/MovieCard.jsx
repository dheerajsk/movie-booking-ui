
import { Card } from 'primereact/card';
import styles from "./MovieCard.module.css";

export function MovieCard(){
    const header = (
        <img alt="Card" 
        src="https://pixner.net/boleto/demo/assets/images/movie/movie01.jpg" />
    );
    return(
        <div className={styles.card}>
        <Card title="Alone"
        header={header} 
        className="md:w-25rem">
                <p className={styles.content}>
                    <hr />
                    <div className={styles.ratings}>
                        <div>
                        <img src='https://pixner.net/boleto/demo/assets/images/movie/tomato.png'></img>
                        &nbsp;&nbsp;
                        <span>98%</span>
                        </div>
                       
                        <div>
                        <img src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="" />
                        &nbsp;&nbsp;
                        <span>98%</span>
                        </div>
                    </div>
                </p>
        </Card>
        </div>
    )
}
