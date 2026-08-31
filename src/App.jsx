//CSS
import styles from './App.module.css'

//Layouts
import { Header } from './layouts/Header/Header'
import { Results } from './layouts/Results/Results'
import { Ranking } from './layouts/Ranking/Ranking'
import { Fame } from './layouts/Fame/Fame'

export const App = () => {


    return (
        <>

            {/* Inicio */}
            <Header />

            <div className={styles["page"]}>

                {/* Resultados */}
                <Results />

                {/* Clasificación */}
                <Ranking />

                {/* Hall of fame */}
                <Fame />

            </div>

            <footer style={{ padding: '1.5rem', textAlign: 'center', fontSize: '10px', color: 'var(--primary)', fontFamily: 'var(--tag)' }}>Liga Supervila de Martorell ©</footer>

        </>
    )
}
