import React from 'react'
import Hero from '../Pages/sections/hero'
import About from '../Pages/sections/about'
import { Head } from '@inertiajs/inertia-react'

export default function Homepage() {
    return (
        <div className='h-screen bg-[#FFB42D]'>
            <Head title='DapurSalto'/>
            <div>
                <h1 className='font-jua'>Account Details</h1>
            </div>
        </div>
    )
}