import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from '../Pages/components/Sidebar'
import Navbar from '../Pages/components/Navbar'

export default function About() {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <Head title="About" />
            <h1 className="text-black">Welcome</h1>
            <p>About this MSMEs</p>
        </div>
    )
}
