import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import { useLocation } from 'react-router-dom'

//CSS
import styles from './App.module.css'

//Layouts
import { Header } from './layouts/Header/Header'
import { Results } from './layouts/Results/Results'
import { Ranking } from './layouts/Ranking/Ranking'
import { Fame } from './layouts/Fame/Fame'
import { Normativa } from './layouts/Normativa/Normativa'
import { Copa } from './layouts/Copa/Copa'
import { Playoffs } from './layouts/Playoffs/Playoffs'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'

const LandingPage = () => {
    const location = useLocation()

    useEffect(() => {
        const section = location.hash.slice(1)
        if (section) {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 300,
                offset: section === 'home' ? 0 : -80,
            })
        }
    }, [location.hash])

    return (
        <>
            <Header />
            <div className={styles["page"]}>
                <Results />
                <Ranking />
            </div>
            <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>
        </>
    )
}

export const App = () => {


    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/hall-of-fame" element={
                    <div className={styles['routePage']}>
                        <Navbar />
                        <div className={`${styles['page']} ${styles['routePageContent']}`}>
                            <Fame />
                        </div>
                        <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>
                    </div>
                } />
                <Route path="/normativa" element={
                    <div className={styles['routePage']}>
                        <Navbar />
                        <div className={`${styles['page']} ${styles['routePageContent']}`}>
                            <Normativa />
                        </div>
                        <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>
                    </div>
                } />
                <Route path="/copa" element={
                    <div className={styles['routePage']}>
                        <Navbar />
                        <div className={`${styles['page']} ${styles['routePageContent']}`}>
                            <Copa />
                        </div>
                        <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>
                    </div>
                } />
                <Route path="/playoffs" element={
                    <div className={styles['routePage']}>
                        <Navbar />
                        <div className={`${styles['page']} ${styles['routePageContent']}`}>
                            <Playoffs />
                        </div>
                        <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>
                    </div>
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )
}
