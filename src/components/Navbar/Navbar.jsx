//Librerías
import { useState } from 'react'
import { Link } from 'react-scroll'

//Icons
import logo from '../../assets/icons/logo.svg'

//CSS
import styles from './Navbar.module.css'

export const Navbar = () => {


    const [opened, setOpened] = useState(false)

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
                    <Link to="home" href='' smooth={true} duration={100} offset={0} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Inicio</Link>
                    <Link to="results" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Resultados</Link>
                    <Link to="ranking" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Clasificación</Link>
                    <Link to="fame" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']} onClick={() => setOpened(false)}>Hall of Fame</Link>
                </div>
            </nav>

        </>
    )
}