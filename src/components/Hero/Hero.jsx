//Librerías
import React from 'react'
import { Element, Link } from 'react-scroll'

//CSS
import styles from './Hero.module.css'

export const Hero = () => {
    return (

        <>

            <Element name='home' className={styles['hero']}>
                <div className={styles['header']}>
                    <div className={styles['title']}>
                        <p data-aos="fade-right" data-aos-easing="ease-in-out">Liga</p>
                        <p data-aos="fade-right" data-aos-delay="300" data-aos-easing="ease-in-out">Supervila</p>
                        <p data-aos="fade-right" data-aos-delay="600" data-aos-easing="ease-in-out">de Martorell</p>
                    </div>
                    <div className={styles['buttons']}>
                        <Link data-aos="fade-down" data-aos-delay="900" data-aos-easing="ease-in-out" to="results" smooth={true} duration={100} spy={true} activeClass={styles['active']}><button>Resultados</button></Link>
                        <Link data-aos="fade-down" data-aos-delay="900" data-aos-easing="ease-in-out" to="ranking" smooth={true} duration={100} spy={true} activeClass={styles['active']}><button>Clasificación</button></Link>
                    </div>
                </div>

                <div className={styles['dropdown']}>
                    <span />
                    <p>Deslizar abajo</p>
                </div>
            </Element>
        </>
    )
}
