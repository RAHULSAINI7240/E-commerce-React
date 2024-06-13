import React from 'react'
import Navbar from './header'
import Card from './card'

const Home = () => {
    return (
        <>
            <Navbar />
            <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </>
    )
}

export default Home
