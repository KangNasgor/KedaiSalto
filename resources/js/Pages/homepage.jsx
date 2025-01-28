import React from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import Sidebar from '../Pages/components/Sidebar'
import Navbar from '../Pages/components/Navbar'

export default function Homepage() {
    return (
        <div className=''>
            <div className="h-screen bg-[#FFB42D] ">
                <Sidebar />
                <Navbar />
                <h1 className='absolute left-3 top-2 text-black font-jua text-2xl mt-2 sm:mt-0 mr-3 sm:mr-0 float-right sm:float-none'>Dapur Salto</h1>
                <div className='flex'>
                    <div className='flex flex-col w-6/12 justify-center items-center gap-6 h-screen pl-6'>
                        <h1 className='text-[#FF2E2E] font-jua text-5xl'>Camilan Gurih dan Minuman Segar untuk Melengkapi Harimu!</h1>
                        <Link className='bg-[#FF2E2E] rounded-xl w-fit px-4 py-3 text-white font-jua'>BUY NOW</Link>
                    </div>
                    <div className="bg-hero bg-cover h-screen w-6/12 rounded-l-3xl">

                    </div>
                </div>
            </div>
        </div>
    )
}