import React from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Link } from '@inertiajs/inertia-react'

export default function Hero() {
    return (
        <div className="h-screen bg-[#FFB42D] ">
            <Sidebar />
            <Navbar />
            <h1 className='absolute right-3 sm:left-3 top-2 text-white font-jua text-2xl sm:mt-1 w-fit'>Dapur Salto</h1>
            <div className='sm:flex bg-hero bg-cover bg-center sm:bg-none'>
                <div className='flex flex-col w-10/12 sm:w-6/12 justify-center items-start sm:items-center gap-6 h-screen pl-6 '>
                    <h1 className='text-[#FF2E2E] font-jua text-5xl bg-[#FFB42D] rounded-xl pl-5 pr-4 pb-8 pt-4 sm:p-0 sm:bg-none'>Camilan Gurih dan Minuman Segar untuk Melengkapi Harimu!</h1>
                    <Link className='bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>BUY NOW</Link>
                </div>
                <div className="bg-hero hidden sm:block bg-center bg-cover bg-no-repeat h-screen w-6/12 rounded-l-3xl"></div>
            </div>
        </div>
    );
}