import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Sidebar from '../Pages/components/Sidebar'

export default function Homepage() {
    return (
        <div>
            <Sidebar />
            <div className="h-screen bg-[#FFB42D]">
            </div>
        </div>
    )
}