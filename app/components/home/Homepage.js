import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../card/Card'
import Products from '../products/allProducts'
// import Card from '../about/page'

export default function Homepage() {
    return (
        <div>
            <Hero />
            <Card />
            <Products />
        </div>
    )
}
