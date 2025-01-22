import React from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import Sidebar from './components/sidebar';

export default function Homepage() {
    return (
        <div>
            <Sidebar />
            <div className="flex justify-center items-center flex-col">
                <Head title="Welcome" />
                <h1 className="text-black">Welcome</h1>
                <p>Homepage</p>
                <Link href="/about">About this web</Link>
            </div>
        </div>
    )
}
