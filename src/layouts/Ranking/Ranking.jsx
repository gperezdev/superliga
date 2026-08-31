//Librerías
import { Element } from 'react-scroll'

//Data
import data from '../../data/ranking.json'

//CSS
import styles from './Ranking.module.css'

export const Ranking = () => {

    return (

        <Element name='ranking' className={styles['ranking']}>
            <div className={styles['wrapper']}>
                <h1 className={styles['title']}>Clasificación</h1>
                <PlayerTable data={data} />
            </div>
        </Element>

    )
}


const PlayerTable = ({ data }) => {

    //Ordenamos tabla primero por nombre y luego por puntuación
    const sortedData = [...data].sort((a, b) => {
        if (b.points !== a.points) {
            return b.points - a.points
        }

        if (b.gamesPlayed !== a.gamesPlayed) {
            return b.gamesPlayed - a.gamesPlayed
        }

        return a.name.localeCompare(b.name)
    })

    const checkPosition = (pos) => {
        if (pos <= 4) return styles['classified']
        if (pos > 4) return styles['playoff']
    }

    return (

        <div className={styles["container"]}>
            <table className={styles.table}>
                <colgroup>
                    <col className={styles.position} />
                    <col className={styles.player} />
                    <col className={styles.stat} />
                    <col className={styles.stat} />
                    <col className={styles.stat} />
                    <col className={styles.points} />
                </colgroup>

                <thead>
                    <tr>
                        <th>#</th>
                        <th style={{ textAlign: 'left' }}>Jugador</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PP</th>
                        <th>PT</th>
                    </tr>
                </thead>

                <tbody>
                    {sortedData.map((player, index) => (
                        <tr key={index} className={checkPosition(index + 1)}>
                            <td className={styles.boldValues}>{index + 1}</td>
                            <td style={{textAlign: 'left'}} className={styles.boldValues}>{player.name}</td>
                            <td>{player.gamesPlayed}</td>
                            <td>{player.wins}</td>
                            <td>{player.loses}</td>
                            <td className={styles.boldValues}>
                                {player?.points?.toFixed(1)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};