import React from 'react'
import Hero from './sections/hero'
import About from './sections/about'
import { Head } from '@inertiajs/inertia-react'

export default function Homepage() {
    return (
        <div className=''>
            <Head title='DapurSalto'/>
            <Hero />
            <About />
        </div>
    )
}