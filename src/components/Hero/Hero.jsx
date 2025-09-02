//Librerías
import React from 'react'
import { Element, Link } from 'react-scroll'

//CSS
import styles from './Hero.module.css'

export const Hero = () => {

    return (

        <>

            <Element name='home' className={styles['hero']}>
                <div className={styles['header']} data-aos="fade-right" data-aos-easing="ease-in-out">
                    <div className={styles['title']}>
                        <p>Liga</p>
                        <p>Supervila</p>
                        <p>de Martorell</p>
                    </div>
                    <div className={styles['buttons']}>
                        <Link to="results" smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']}><button>Resultados</button></Link>
                        <Link to="ranking" smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']}><button>Clasificación</button></Link>
                    </div>
                </div>
            </Element>
        </>
    )
}
