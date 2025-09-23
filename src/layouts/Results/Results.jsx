//Librerías
import React, { useState, useEffect } from 'react'
import { Element } from 'react-scroll'
import moment from 'moment'

//Icons
import calendar from '../../assets/icons/calendar.svg'

//Data
import data from '../../data/results.json'

//CSS
import styles from './Results.module.css'

export const Results = () => {

    const [dropdown, setDropdown] = useState(false)
    const [currentData, setCurrentData] = useState([])

    
    const parseDate = (dateStr) => { return moment(dateStr, "D/M/YYYY") }

    useEffect(() => {
        const today = moment()

        let currentJourney = null
        let lastDisputed = null

        data.matches.forEach((round) => {
            const start = parseDate(round.dates[0])
            const end = parseDate(round.dates[1])

            if (today.isBetween(start, end, "day", "[]")) {
                currentJourney = round
            }

            if (today.isAfter(end)) {
                lastDisputed = round
            }
        })

        if (currentJourney) {
            setCurrentData(currentJourney)
        } else if (lastDisputed) {
            setCurrentData(lastDisputed)
        } else {
            setCurrentData(data[0])
        }
    }, [])

    useEffect(() => {
        setDropdown(false)
    }, [currentData])


    return (

        <Element name='results' className={styles['results']}>
            <div className={styles['wrapper']} data-aos="fade-right" data-aos-easing="ease-in-out">
                <div className={styles['header']}>
                    <div className={styles['title']}>
                        <h1>Resultados</h1>
                        <h1>{`J${currentData?.journey?.split(' ')[1]}`}</h1>
                    </div>
                    <div className={styles['selector']} onClick={() => { setDropdown(prev => !prev) }}>
                        <img src={calendar} alt="Calendario" />
                        <p>{currentData.journey}</p>
                        {dropdown && <Dropdown data={data} selectJourney={setCurrentData} closeDropdown={() => { setDropdown(false) }} />}
                    </div>

                </div>

                <Matches currentData={currentData} />
            </div>
        </Element>

    )
}

//Componente para mostrar el desplegable
const Dropdown = ({ data, selectJourney, closeDropdown }) => {

    return (
        <>
            <div className={styles['dropdown']}>
                {data?.matches?.map(e => (
                    <p key={e?.journey} onClick={() => { selectJourney(e); closeDropdown() }}>{e?.journey}</p>
                ))}
            </div>
        </>
    )

}


// Componente para crear una pareja
const Pair = ({ pair, results, points, opponentResults, opponentPoints }) => {

    return (
        <div className={styles['pair']}>

            <div className={styles['names']}>
                {pair.map((name, i) => (<p key={i} className={points > opponentPoints ? styles['winner'] : ''}>{name ?? '-'}</p>))}
            </div>

            <div className={styles['sets']}>
                {Array.from({ length: 5 }).map((_, i) => {
                    const myScore = results?.[i]
                    const oppScore = opponentResults?.[i]
                    const isWinner = myScore != null && oppScore != null && myScore > oppScore
                    return (<p key={i} className={isWinner ? styles['winner'] : ''}>{myScore ?? '-'}</p>)
                })}
            </div>

            <p className={points > opponentPoints ? styles['winner'] : ''}>{points[0] ?? '-'}</p>

        </div>
    )
}

//Componente para mostrar la tabla con los resultados
const Matches = ({ currentData }) => {
    return (
        <div className={styles['matches']}>
            {currentData?.games?.map((game, idx) => (
                <div key={idx} className={styles['game']}>
                    <Pair
                        pair={game.pairs[0]}
                        results={game.results[0]}
                        points={game.points[0]}
                        opponentResults={game.results[1]}
                        opponentPoints={game.points[1]}
                    />

                    <Pair
                        pair={game.pairs[1]}
                        results={game.results[1]}
                        points={game.points[1]}
                        opponentResults={game.results[0]}
                        opponentPoints={game.points[0]}
                    />
                    {idx !== 2 && <hr />}
                </div>
            ))}
        </div>
    )
}