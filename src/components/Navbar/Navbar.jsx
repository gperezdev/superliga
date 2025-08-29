//Librerías
import React, { useState } from 'react'
import { Link } from 'react-scroll'

//Icons
import logo from '../../assets/icons/logo.svg'

//CSS
import styles from './Navbar.module.css'

export const Navbar = () => {


    const [isVisible, setIsVisible] = useState(false)

    return (

        <>
            <div data-aos="fade-down" className={styles['navbar']}>

                <div className={styles['logo']}>
                    <img src={logo} alt="Logo" />
                    <span>Supervila</span>
                </div>

                <div className={styles['content']}>
                    <Link to="home" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Inicio</Link>
                    <Link to="results" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Resultados</Link>
                    <Link to="ranking" smooth={true} duration={100} spy={true} activeClass={styles['active']}>Clasificación</Link>
                </div>
            </div>

        </>
    )
}