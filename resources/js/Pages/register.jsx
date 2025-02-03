import React from 'react'
import Hero from './sections/hero'
import About from './sections/about'
import { Head, Link } from '@inertiajs/inertia-react'
import { faArrowLeft, faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Register() {
    return (
        <div className='h-screen bg-[#FFB42D] flex items-center'>
            <Head title='DapurSalto' />
            <div className='w-6/12 mx-auto'>
                <h1 className='font-jua text-[#FF2E2E] text-4xl mx-auto w-fit mb-5'>Register</h1>
                <form className='w-5/12 mx-auto grid gap-x-24 mb-5 gap-y-2 grid-cols-1'>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>Nama</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faUser} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='text' placeholder='John Smith' />
                        </div>
                    </div>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>Email</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='johnsmith@gmail.com' />
                        </div>
                    </div>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>No. Telepon</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faPhone} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='08123456789' />
                        </div>
                    </div>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>Password</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faLock} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='********' />
                        </div>
                    </div>
                </form>
                <Link className='block mx-auto bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out mb-4'>
                    Register
                </Link>
                <Link href='/user/login' className='font-jua text-[#FF2E2E] w-fit mx-auto block'>Sudah punya akun?</Link>
            </div>
        </div>
    )
}