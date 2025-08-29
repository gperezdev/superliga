//Librerías
import React from 'react'
import { Element } from 'react-scroll'

//Data
import data from '../../data/ranking.json'

//CSS
import styles from './Ranking.module.css'

export const Ranking = () => {

    return (

        <Element name='ranking' className={styles['ranking']}>
            <div className={styles['wrapper']} data-aos="fade-left"  data-aos-easing="ease-in-out">
                <h1 className={styles['title']}>Clasificación</h1>
                <PlayerTable data={data} />
            </div>
        </Element>

    )
}


const PlayerTable = ({ data }) => {

    const sortedData = [...data].sort((a, b) => b.points - a.points);

    const checkPosition = (pos) => {
        if (pos <= 4) return styles['classified']
        if (pos > 4 && pos <= 10) return styles['playoff']
        if (pos > 10) return styles['eliminated']
    }

    return (

        <div className={styles["container"]}>
            <table className={styles["table"]}>
                <thead>
                    <tr style={{ fontWeight: 'bold' }}>
                        <th>Pos.</th>
                        <th style={{ textAlign: 'left' }}>Jugador</th>
                        <th>PT</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PP</th>

                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((player, index) => (
                        <tr key={index} className={checkPosition(index + 1)}>
                            <td >{index + 1}</td>
                            <td style={{ textAlign: 'left' }}>{player.name}</td>
                            <td style={{ fontWeight: 'bold' }}>{player.points}</td>
                            <td>{player.gamesPlayed}</td>
                            <td>{player.wins}</td>
                            <td>{player.loses}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};