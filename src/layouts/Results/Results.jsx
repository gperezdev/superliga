//Librerías
import React, { useState, useEffect, useRef } from 'react'
import { Element } from 'react-scroll'
import moment from 'moment'

//Data
import data from '../../data/results.json'

//Arrow
import arrow from '../../assets/icons/arrow.svg'

//CSS
import styles from './Results.module.css'

export const Results = () => {

    //Variables
    const [currentData, setCurrentData] = useState([])
    const journeysRef = useRef(null)
    const previousJourney = useRef(currentData?.journey)
    const parseDate = (dateStr) => { return moment(dateStr, "D/M/YYYY") }

    //Utils
    const scrollJourneys = (direction) => {
        journeysRef.current?.scrollBy({
            left: direction * 200,
            behavior: 'smooth',
        });
    }

    //Organizar jornadas segun la fecha actual
    useEffect(() => {
        const today = moment()
        const firstRound = data.matches?.[0]

        let currentJourney = null
        let lastDisputed = null
        let nextJourney = null

        data.matches.forEach((round) => {
            const start = parseDate(round.dates[0])
            const end = parseDate(round.dates[1])

            if (today.isBetween(start, end, "day", "[]")) {
                currentJourney = round
            }

            if (today.isAfter(end)) {
                lastDisputed = round
            }

            if (today.isBefore(start) && !nextJourney) {
                nextJourney = round
            }
        })

        if (currentJourney) {
            setCurrentData(currentJourney)
        } else if (lastDisputed) {
            setCurrentData(lastDisputed)
        } else if (nextJourney) {
            setCurrentData(nextJourney)
        } else {
            setCurrentData(firstRound)
        }
    }, [])

    //Realizar cambios de jornada con scroll into view
    useEffect(() => {
        const currentJourney = currentData?.journey;

        // Primera ejecución: no hacemos scroll
        if (previousJourney.current === undefined) {
            previousJourney.current = currentJourney;
            return
        }

        // Si la jornada no ha cambiado, no hacemos nada
        if (previousJourney.current === currentJourney) {
            return
        }

        previousJourney.current = currentJourney

        if (!currentJourney || !journeysRef.current) return;

        const activeJourney = journeysRef.current.querySelector(
            `[data-journey="${currentJourney}"]`
        )

        activeJourney?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
        });
    }, [currentData?.journey])

    return (

        <Element name='results' className={styles['results']}>
            <div className={styles['wrapper']}>
                <div className={styles['header']}>
                    <div className={styles['title']}>
                        <h1>Resultados</h1>
                        <h1>{`J${currentData?.journey?.split(' ')[1]}`}</h1>
                    </div>
                    <div className={styles.journeys}>
                        <button
                            className={styles.arrow}
                            onClick={() => scrollJourneys(-1)}
                        >
                            <img src={arrow} alt="Arrow derecha" />
                        </button>

                        <div
                            className={styles.journeysList}
                            ref={journeysRef}
                        >
                            {data?.matches?.map(e => (
                                <p
                                    key={e?.journey}
                                    data-journey={e?.journey}
                                    className={`${styles.selector} ${e?.journey === currentData?.journey
                                        ? styles.active
                                        : ''
                                        }`}
                                    onClick={() => setCurrentData(e)}
                                >
                                    {e?.journey}
                                </p>
                            ))}
                        </div>

                        <button
                            className={styles.arrow}
                            onClick={() => scrollJourneys(1)}
                        >
                            <img style={{ transform: 'rotate(-180deg)' }} src={arrow} alt="Arrow derecha" />
                        </button>
                    </div>
                </div>

                <Matches currentData={currentData} />
            </div>
        </Element>

    )
}

//Formatear nombre
const formatName = (name) => {
    if (!name) return '-';

    const parts = name.trim().split(/\s+/);

    if (parts.length === 1) {
        return parts[0];
    }

    const firstName = parts[0];
    const surnameParts = parts.slice(1);

    return `${firstName.charAt(0)}. ${surnameParts.join(' ')}`;
};


// Componente para crear una pareja
const Pair = ({ pair, results, points, opponentPoints, equipment }) => {
    const isMatchWinner = points?.[0] != null
        && opponentPoints?.[0] != null
        && points[0] > opponentPoints[0]

    return (
        <div className={styles['pair']}>

            <div className={styles.names}>
                {pair.map((name, i) => (
                    <React.Fragment key={i}>
                        <p className={isMatchWinner ? styles.winner : ''}>
                            {equipment?.trim() === name?.trim() ? '· ' : ''}
                            {formatName(name)}
                        </p>

                        {i < pair.length - 1 && (
                            <span className={isMatchWinner ? styles.winner : ''}>/</span>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className={styles['sets']}>
                {Array.from({ length: 5 }).map((_, i) => {
                    const myScore = results?.[i]
                    return (
                        <p key={i} className={isMatchWinner ? styles['winner'] : ''}>
                            {myScore ?? '-'}
                        </p>
                    )
                })}
            </div>

            <p style={{ marginLeft: 'auto' }} className={isMatchWinner ? styles['winner'] : ''}>{points?.[0]?.toFixed(1) ?? '-'}</p>

        </div>
    )
}

//Componente para mostrar la tabla con los resultados
const Matches = ({ currentData }) => {
    return (
        <div className={styles['matches']}>
            {currentData?.games?.map((game, idx) => (
                <div key={idx} className={styles['game']}>

                    <div className={styles['game_header']}>
                        <p>{game?.date || 'Por determinar'}</p>
                        <span>·</span>
                        <p>{game?.court || 'Por determinar'}</p>
                    </div>

                    <Pair
                        pair={game.pairs[0]}
                        results={game.results[0]}
                        points={game.points[0]}
                        opponentPoints={game.points[1]}
                        equipment={game.equipment}
                    />

                    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center', width: '100%', opacity: '0.25' }}>
                        <span style={{ flex: '1', background: 'var(--primary)', height: '1px' }} />
                        <p style={{ padding: '0px 20px', color: 'var(--primary)', fontFamily: 'var(--tag)', fontSize: '12px', letterSpacing: '1px' }}>versus</p>
                        <span style={{ flex: '1', background: 'var(--primary)', height: '1px' }} />
                    </div>

                    <Pair
                        pair={game.pairs[1]}
                        results={game.results[1]}
                        points={game.points[1]}
                        opponentPoints={game.points[0]}
                        equipment={game.equipment}
                    />

                    {game?.info?.injured && <p className={styles['game__injured']}>✚ {game.info.injured}</p>}
                    {game?.info?.adds && <p className={styles['game__adds']}>✚ {game.info.adds}</p>}
                    {game?.info?.sanctioned && <p className={styles['game__sanctioned']}>✚ {game.info.sanctioned}</p>}


                </div>
            ))}
        </div>
    )
}