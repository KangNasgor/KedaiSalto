import React from 'react'
import Hero from '../Pages/sections/hero'
import About from '../Pages/sections/about'
import { Head, usePage } from '@inertiajs/inertia-react'

export default function Homepage() {
    return (
        <div className=''>
            <Head title='Kedai Salto'/>
            <Hero />
            <About />
        </div>
    )
}