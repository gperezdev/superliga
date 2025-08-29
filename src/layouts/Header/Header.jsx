//Liberías
import React from 'react'

//Componentes
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/Hero/Hero'

export const Header = () => {
    return (

        <>

            { /* Navbar */}
            <Navbar />

            { /* Hero */}
            <Hero />

        </>

    )
}