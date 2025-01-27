import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from '../Pages/components/Sidebar'

export default function About() {
    return (
        <div>
            <Sidebar />
            <Head title="About" />
            <h1 className="text-black">Welcome</h1>
            <p>About this MSMEs</p>
        </div>
    )
}
