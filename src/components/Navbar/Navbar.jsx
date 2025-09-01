//Librerías
import React, { useState } from 'react'
import { Link } from 'react-scroll'

//Icons
import logo from '../../assets/icons/logo.svg'

//CSS
import styles from './Navbar.module.css'

export const Navbar = () => {


    const [opened, setOpened] = useState(false)

    return (

        <>
            <nav data-aos="fade-down" className={styles['navbar']} style={{backdropFilter: opened ? 'none' : 'blur(20px)'}}>

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
                    <Link to="home" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Inicio</Link>
                    <Link to="results" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Resultados</Link>
                    <Link to="ranking" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Clasificación</Link>
                </div>
            </nav>

        </>
    )
}