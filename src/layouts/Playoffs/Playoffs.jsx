import { Fragment } from 'react'
import rankingData from '../../data/ranking.json'
import styles from './Playoffs.module.css'

const sortedPlayers = [...rankingData].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points
    if (b.gamesPlayed !== a.gamesPlayed) return b.gamesPlayed - a.gamesPlayed
    if (b.wins !== a.wins) return b.wins - a.wins
    return a.name.localeCompare(b.name)
})

const formatName = (name) => {
    if (!name) return '-'

    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0]

    return `${parts[0].charAt(0)}. ${parts.slice(1).join(' ')}`
}

const playerAt = (position) => {
    const name = sortedPlayers[position - 1]?.name
    return name ? formatName(name) : `${position}.º clasificado`
}
const rankedPair = (first, second) => `${first}.º + ${second}.º`

const playInWinner = `Ganador del Play-In (${rankedPair(7, 8)})`

const rounds = [
    {
        title: 'Play-In',
        matches: [
            {
                title: 'Acceso a Playoffs',
                teams: [
                    [playerAt(7), playerAt(8)],
                    [playerAt(9), playerAt(10)],
                ],
            },
        ],
    },
    {
        title: 'Semifinales',
        matches: [
            {
                title: 'Semifinal 1',
                teams: [
                    [playerAt(1), playerAt(2)],
                    [playInWinner],
                ],
            },
            {
                title: 'Semifinal 2',
                teams: [
                    [playerAt(3), playerAt(4)],
                    [playerAt(5), playerAt(6)],
                ],
            },
        ],
    },
    {
        title: 'Final',
        matches: [
            {
                title: 'Final',
                teams: [
                    ['Pareja ganadora semifinal 1'],
                    ['Pareja ganadora semifinal 2'],
                ],
            },
        ],
    },
]

export const Playoffs = () => (
    <main className={styles.playoffs}>
        <div className={styles.wrapper}>
            <p className={styles.eyebrow}>TEMPORADA 2026</p>
            <h1 className={styles.title}>Playoffs</h1>
            <div className={styles.bracket} aria-label="Cuadro de los Playoffs">
                {rounds.map((round, index) => (
                    <Fragment key={round.title}>
                        <section className={`${styles.round} ${styles[`round${index + 1}`]}`}>
                            <div className={styles.matchList}>
                                {round.matches.map((match) => (
                                    <MatchCard key={match.title} title={match.title}>
                                        {match.teams.map((team, teamIndex) => (
                                            <Fragment key={`${match.title}-${teamIndex}`}>
                                                {teamIndex > 0 && <span className={styles.versus}>versus</span>}
                                                <TeamPlaceholder team={team} />
                                            </Fragment>
                                        ))}
                                    </MatchCard>
                                ))}
                            </div>
                        </section>
                        {index < rounds.length - 1 && <BracketConnector type={index} />}
                    </Fragment>
                ))}
            </div>
        </div>
    </main>
)

const MatchCard = ({ title, children }) => (
    <article className={styles.matchCard}>
        <h3>{title}</h3>
        <div className={styles.contestants}>{children}</div>
    </article>
)

const TeamPlaceholder = ({ team }) => (
    <div className={`${styles.contestant} ${styles.team}`}>
        <span className={styles.playerName}>{team.join(' / ')}</span>
    </div>
)

const BracketConnector = ({ type }) => (
    <svg
        className={`${styles.connector} ${type === 0 ? styles.playInConnector : styles.finalConnector}`}
        viewBox="0 0 40 356"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        {type === 0 ? (
            <>
                <path d="M0 178H20V74H40" />
                <path d="M0 178H20V282H40" />
            </>
        ) : (
            <>
                <path d="M0 74H20V178H40" />
                <path d="M0 282H20V178H40" />
            </>
        )}
    </svg>
)
