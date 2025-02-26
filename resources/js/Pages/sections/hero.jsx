import React, { useEffect, useState, useRef } from "react";
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Link, usePage } from '@inertiajs/inertia-react'
import axios from "axios";
import Swal from "sweetalert2";

export default function Hero() {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(null);
    const [loadingText, setLoadingText] = useState('Loading');
    const intervalRef = useRef(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/user/login/check', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                if (response.data.loggedIn === true) {
                    setUser(response.data.user);
                    setLoggedIn(response.data.loggedIn);
                }
                else{
                    setUser(null);
                    setLoggedIn(false);
                }
            }
            catch(error){
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Error : ' + error.response.status,
                    confirmButtonText: 'OK',
                });
            }
        }

        fetchUser();
    }, []);
    useEffect(() => {
        if(loggedIn === null){
            intervalRef.current = setInterval(() => setLoadingText(prev => prev.length === 10 ? 'Loading' : prev + '.'), 400);
        }
        else{
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [user]);

    return (
        <div className="h-screen bg-[#FFB42D]">
            <Sidebar />
            <Navbar />
            {
                loggedIn === null ?
                <h1 className='absolute right-3 sm:left-3 top-2 text-white font-jua text-2xl sm:mt-1 w-fit z-50'>{loadingText}</h1>
                :
                loggedIn === false ?
                <h1 className='absolute right-3 sm:left-3 top-2 text-white font-jua text-2xl sm:mt-1 w-fit z-50'>Kedai Salto</h1>
                :
                <h1 className='absolute right-3 sm:left-3 top-2 text-white font-jua text-2xl sm:mt-1 w-fit z-50'>Welcome, {user.name}!</h1>
            }
            <div className='sm:flex bg-hero bg-cover bg-center sm:bg-none'>
                <div className='flex flex-col w-10/12 sm:w-6/12 justify-center items-start sm:items-center gap-6 h-screen pl-6 '>
                    <h1 className='text-[#FF2E2E] font-jua text-5xl bg-[#FFB42D] rounded-xl pl-5 pr-4 pb-8 pt-4 sm:p-0 sm:bg-none'>Camilan Gurih dan Minuman Segar untuk Melengkapi Harimu!</h1>
                    <Link href="/user/product" className='bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>BUY NOW</Link>
                </div>
                <div className="bg-hero hidden sm:block bg-center bg-cover bg-no-repeat h-screen w-6/12 rounded-l-3xl"></div>
            </div>
        </div>
    );
}