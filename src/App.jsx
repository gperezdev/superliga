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

            <div>
                {/* Resultados */}
                <Results />

                {/* Clasificación */}
                <Ranking />
            </div>



        </>
    )
}
