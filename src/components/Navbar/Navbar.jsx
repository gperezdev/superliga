//Librerías
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom'

//Icons
import logo from '../../assets/icons/logo.svg'

//CSS
import styles from './Navbar.module.css'

export const Navbar = () => {


    const [opened, setOpened] = useState(false)
    const isLanding = useLocation().pathname === '/'

    return (

        <>
            <nav className={styles['navbar']} style={{ backdropFilter: opened ? 'none' : 'blur(10px)' }}>

                <div className={styles['logo']}>
                    <img src={logo} alt="Logo" />
                    <span>Supervila</span>
                </div>

                {/* Burger Icon */}
                <div className={`${styles['burger']} ${opened ? styles['burger--active'] : ""}`} onClick={() => setOpened(!opened)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`${styles['content']} ${opened ? styles['navbar--opened'] : ''}`}>
                    {isLanding ? (
                        <>
                            <ScrollLink to="home" href='' smooth={true} duration={100} offset={0} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Inicio</ScrollLink>
                            <ScrollLink to="results" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Resultados</ScrollLink>
                            <ScrollLink to="ranking" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Clasificación</ScrollLink>
                        </>
                    ) : (
                        <>
                            <RouterLink to="/#home" onClick={() => setOpened(false)}>Inicio</RouterLink>
                            <RouterLink to="/#results" onClick={() => setOpened(false)}>Resultados</RouterLink>
                            <RouterLink to="/#ranking" onClick={() => setOpened(false)}>Clasificación</RouterLink>
                        </>
                    )}
                    <NavLink
                        to="/hall-of-fame"
                        className={({ isActive }) => isActive ? styles['active'] : undefined}
                        onClick={() => setOpened(false)}
                    >
                        Hall of Fame
                    </NavLink>
                    <NavLink
                        to="/normativa"
                        className={({ isActive }) => isActive ? styles['active'] : undefined}
                        onClick={() => setOpened(false)}
                    >
                        Normativa
                    </NavLink>
                    <NavLink
                        to="/copa"
                        className={({ isActive }) => isActive ? styles['active'] : undefined}
                        onClick={() => setOpened(false)}
                    >
                        Copa
                    </NavLink>
                    <NavLink
                        to="/playoffs"
                        className={({ isActive }) => isActive ? styles['active'] : undefined}
                        onClick={() => setOpened(false)}
                    >
                        Playoffs
                    </NavLink>
                </div>
            </nav>

        </>
    )
}