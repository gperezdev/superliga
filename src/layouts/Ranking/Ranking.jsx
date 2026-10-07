//Librerías
import { Element } from 'react-scroll'

//Data
import data from '../../data/ranking.json'
import resultsData from '../../data/results.json'

//Icons
import streakGif from '../../assets/icons/streak.gif'

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

    // Calcula las rachas desde los resultados reales; ranking.json solo contiene el total de victorias.
    const playerStreaks = getPlayerStreaks(resultsData.matches)

    //Ordenar por puntos, partidos jugados, partidos ganados y nombre
    const sortedData = [...data].sort((a, b) => {
        if (b.points !== a.points) {
            return b.points - a.points
        }

        if (b.gamesPlayed !== a.gamesPlayed) {
            return b.gamesPlayed - a.gamesPlayed
        }

        if (b.wins !== a.wins) {
            return b.wins - a.wins
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
                    {sortedData.map((player, index) => {
                        const currentStreak = playerStreaks.get(normalizePlayerName(player.name)) || 0

                        return (
                            <tr key={index} className={checkPosition(index + 1)}>
                                <td className={styles.boldValues}>{index + 1}</td>
                                <td style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }} className={styles.boldValues}>
                                    {player.name}
                                    {currentStreak >= 3 && (
                                        <span
                                            className={styles.streakIndicator}
                                            role="img"
                                            aria-label={`Racha actual de ${currentStreak} victorias`}
                                        >
                                            <img className={styles.streakFlame} src={streakGif} alt="" />
                                            <span className={styles.streakCount} aria-hidden="true">{currentStreak}</span>
                                        </span>
                                    )}
                                </td>
                                <td>{player.gamesPlayed}</td>
                                <td>{player.wins}</td>
                                <td>{player.loses}</td>
                                <td className={styles.boldValues}>
                                    {player?.points?.toFixed(1)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

const getPlayerStreaks = (matches) => {
    const monthIndexes = {
        ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
        jul: 6, ago: 7, set: 8, sep: 8, sept: 8, oct: 9, nov: 10, dic: 11,
    }
    const playedMatches = []
    let order = 0

    matches.forEach((round) => {
        round.games.forEach((game) => {
            const matchOrder = order++
            // Los partidos pendientes no tienen puntuaciones numéricas para ambos equipos.
            if (!game.points || game.points.some((teamPoints) => typeof teamPoints?.[0] !== 'number')) return

            // Los resultados guardan la fecha como texto (por ejemplo, "24 de set. 2026").
            const dateParts = game.date?.match(/^(\d{1,2}) de ([a-z]+)\.? (\d{4})$/i)
            const monthIndex = dateParts && monthIndexes[dateParts[2].toLowerCase()]
            if (!dateParts || monthIndex === undefined) {
                throw new Error(`Invalid date for completed match: ${game.date}`)
            }

            playedMatches.push({
                game,
                date: new Date(Number(dateParts[3]), monthIndex, Number(dateParts[1])),
                order: matchOrder,
            })
        })
    })

    // Ordenar cronológicamente permite respetar el orden de las rachas aunque el JSON esté agrupado por jornadas.
    // El índice original mantiene un orden estable si varios partidos tienen la misma fecha.
    playedMatches.sort((a, b) => a.date - b.date || a.order - b.order)

    const streaks = new Map()
    playedMatches.forEach(({ game }) => {
        // points[0] y points[1] identifican los puntos de cada pareja; un empate no cuenta como victoria.
        const winner = game.points[0][0] > game.points[1][0]
            ? 0
            : game.points[1][0] > game.points[0][0]
                ? 1
                : -1

        game.pairs.forEach((team, teamIndex) => {
            team.forEach((playerName) => {
                const playerKey = normalizePlayerName(playerName)
                const currentStreak = streaks.get(playerKey) || 0
                // Ambos miembros de la pareja comparten el resultado; cualquier derrota reinicia su racha.
                streaks.set(playerKey, teamIndex === winner ? currentStreak + 1 : 0)
            })
        })
    })

    return streaks
}

// Ignora tildes para que nombres escritos con/sin acentos coincidan entre ambos JSON.
const normalizePlayerName = (name) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')