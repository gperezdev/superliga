//Librerías
import { Element } from 'react-scroll'

//Icons
import trophy from '../../assets/icons/trophy.svg'

//CSS
import styles from './Fame.module.css'

export const Fame = () => {

    return (

        <Element name='fame' className={styles['fame']}>
            <div className={styles['wrapper']}>
                <h1 className={styles['title']}>HALL OF FAME</h1>

                <div className={styles['season_winners']}>
                    <h2>TEMP. 25-26</h2>
                    <div className={styles['winners']}>
                        <div className={styles['card']}>
                            <img src={trophy} alt='Trofeo' />
                            <p>A. Pereira</p>
                            <p>CAMPÉON LIGA</p>
                        </div>
                        <div className={styles['card']}>
                            <img src={trophy} alt='Trofeo' />
                            <p>A. Pereira / A. Cristóbal</p>
                            <p>CAMPEONES PLAY-OFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </Element>

    )
}


