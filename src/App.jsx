//Librerías
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


//Layouts
import { Header } from './layouts/Header/Header'
import { Results } from './layouts/Results/Results'
import { Ranking } from './layouts/Ranking/Ranking'

export const App = () => {


    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    return (
        <>

            {/* Inicio */}
            <Header />

            <div style={{display: 'flex', flexFlow: 'column nowrap', gap: '40px'}}>
                {/* Resultados */}
                <Results />

                {/* Clasificación */}
                <Ranking />
            </div>

            <footer style={{padding: '3.5rem', textAlign: 'center', fontSize: '10px', opacity: '0.5'}}>Liga Supervila de Martorell ©</footer>

        </>
    )
}
