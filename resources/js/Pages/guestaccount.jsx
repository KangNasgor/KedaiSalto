import React from 'react'
import { Head, Link } from '@inertiajs/inertia-react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Account() {
    return (
        <div className='h-screen bg-[#FFB42D] flex items-center'>
            <Link href='/' className='absolute top-2 left-3 flex gap-3 items-center'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-2xl bg-[#FF2E2E] p-2 rounded-full text-white'/>
                <h1 className='font-jua text-[#FF2E2E] text-3xl'>Back</h1>
            </Link>
            <Head title='DapurSalto'/>
            <div className='w-6/12 mx-auto'> 
                <h1 className='font-jua text-[#FF2E2E] text-4xl mx-auto w-fit mb-5'>Anda belum melakukan login!</h1>
                <div className='w-fit mt-5 flex gap-5 mx-auto'>
                    <Link href='/user/login' className='bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        LOGIN
                    </Link>
                </div>
            </div>
        </div>
    )
}