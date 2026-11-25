import { Fragment } from 'react'
import styles from './Copa.module.css'

const rounds = [
    {
        title: 'Cuartos de final',
        matches: [
            { title: 'Cuartos de final 1', teams: ['Carlos Godines - Josep Cabrera', 'Roberto De la Gala - Martín Cabello'] },
            { title: 'Cuartos de final 2', teams: ['Akos Szabo - Fran Domínguez', 'Ángel Pérez - Gustavo Guerrero'] },
        ],
    },
    {
        title: 'Semifinales',
        matches: [
            { title: 'Semifinal 1', teams: ['Joaquín Sánchez - Ganador Q1 J2', 'Gerard Pérez - Ganador Q1 J1'] },
            { title: 'Semifinal 2', teams: ['David Díez - Ganador Q2 J2', 'Albert Doblas - Ganador Q2 J1'] },
        ],
    },
    {
        title: 'Final',
        matches: [
            { title: 'Final', teams: ['Semis 1 Ganador', 'Semis 2 Ganador'] },
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
                                                {index > 0 && <Versus />}
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
        <div className={styles.matchHeader}>
            <p>{title}</p>
        </div>
        <div className={styles.contestants}>{children}</div>
    </article>
)

const formatName = (name) => {
    if (!name) return '-'

    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0]

    const firstName = parts[0]
    const surnameParts = parts.slice(1)
    return `${firstName.charAt(0)}. ${surnameParts.join(' ')}`
}

const TeamPlaceholder = ({ label }) => (
    <div className={styles.pair}>
        <div className={styles.names}>
            {label.split(' - ').map((name, index) => (
                <Fragment key={name}>
                    {index > 0 && <span>/</span>}
                    <p>
                        <span className={name.includes('Ganador') ? styles.pendingTeam : ''}>
                            {name.includes('Ganador') ? name : formatName(name)}
                        </span>
                    </p>
                </Fragment>
            ))}
        </div>
        <div className={styles.sets} aria-label="Resultado de tres sets">
            {[0, 1, 2].map((set) => <p key={set}>-</p>)}
        </div>
    </div>
)

const Versus = () => (
    <div className={styles.versus}>
        <span />
        <p>versus</p>
        <span />
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
                <path className={styles.desktopConnectorPath} d="M0 74H40" />
                <path className={styles.desktopConnectorPath} d="M0 282H40" />
            </>
        ) : (
            <>
                <path className={styles.desktopConnectorPath} d="M0 74H20V178H40" />
                <path className={styles.desktopConnectorPath} d="M0 282H20V178H40" />
            </>
        )}
        <path className={styles.mobileConnectorPath} d="M20 0V340" />
    </svg>
)
