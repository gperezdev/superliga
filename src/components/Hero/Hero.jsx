//Librerías
import { Element, Link } from 'react-scroll'

//CSS
import styles from './Hero.module.css'

export const Hero = () => {

    return (

        <>

            <Element name='home' className={styles['hero']}>
                <div className={styles['header']}>
                    <div className={styles['title']}>
                        <div style={{ backgroundColor: '#CEF17B10', backdropFilter: 'blur(10px)', padding: '10px 20px' }}>
                            <p>TEMPORADA 26-27</p>
                        </div>
                        <p>Supervila.</p>
                    </div>
                    <div className={styles['buttons']}>
                        <Link to="results" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']}><button>Resultados</button></Link>
                        <Link to="ranking" href='' smooth={true} duration={100} offset={-80} spy={true} activeClass={styles['active']}><button>Clasificación</button></Link>
                    </div>
                </div>
            </Element>
        </>
    )
}
