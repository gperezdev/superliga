import { Fragment } from 'react'
import styles from './Copa.module.css'

const rounds = [
    {
        title: 'Cuartos de final',
        matches: [
            { title: 'Cuartos de final 1', teams: ['Bombo 1 + Bombo 2', 'Bombo 1 + Bombo 2'] },
            { title: 'Cuartos de final 2', teams: ['Bombo 1 + Bombo 2', 'Bombo 1 + Bombo 2'] },
        ],
    },
    {
        title: 'Semifinales',
        matches: [
            { title: 'Semifinal 1', teams: ['Bombo 0 + clasificado de cuartos', 'Bombo 0 + clasificado de cuartos'] },
            { title: 'Semifinal 2', teams: ['Bombo 0 + clasificado de cuartos', 'Bombo 0 + clasificado de cuartos'] },
        ],
    },
    {
        title: 'Final',
        matches: [
            { title: 'Final', teams: ['Pareja ganadora semifinal 1', 'Pareja ganadora semifinal 2'] },
        ],
    },
]

export const Copa = () => (
    <main className={styles.copa}>
        <div className={styles.wrapper}>
            <p className={styles.eyebrow}>TEMPORADA 2026</p>
            <h1 className={styles.title}>Copa</h1>
            <div className={styles.bracket} aria-label="Cuadro de la Copa">
                {rounds.map((round, index) => (
                    <Fragment key={round.title}>
                        <section className={`${styles.round} ${styles[`round${index + 1}`]}`}>
                            <div className={styles.matchList}>
                                {round.matches.map((match) => (
                                    <MatchCard key={match.title} title={match.title}>
                                        {match.teams.map((team, index) => (
                                            <Fragment key={`${match.title}-${index}`}>
                                                {index > 0 && <span className={styles.versus}>versus</span>}
                                                <TeamPlaceholder label={team} />
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

const TeamPlaceholder = ({ label }) => (
    <div className={`${styles.contestant} ${styles.team}`}>
        <span className={styles.playerName}>{label}</span>
    </div>
)

const BracketConnector = ({ type }) => (
    <svg
        className={`${styles.connector} ${type === 0 ? styles.quarterConnector : styles.finalConnector}`}
        viewBox="0 0 40 356"
        preserveAspectRatio="none"
        aria-hidden="true"
    >
        {type === 0 ? (
            <>
                <path d="M0 74H40" />
                <path d="M0 282H40" />
            </>
        ) : (
            <>
                <path d="M0 74H20V178H40" />
                <path d="M0 282H20V178H40" />
            </>
        )}
    </svg>
)
