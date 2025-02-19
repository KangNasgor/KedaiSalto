import React from 'react'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Account() {
    const { user } = usePage().props;
    return (
        <div className='h-screen bg-[#FFB42D] flex items-center'>
            <div onClick={() => { history.back() }} className='absolute top-2 left-3 flex gap-3 items-center cursor-pointer'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-2xl bg-[#FF2E2E] p-2 rounded-full text-white' />
                <h1 className='font-jua text-[#FF2E2E] text-3xl'>Back</h1>
            </div>
            <Head title='DapurSalto' />
            <div className='w-6/12 mx-auto'>
                <h1 className='font-jua text-[#FF2E2E] text-4xl mx-auto w-fit mb-5'>Account Details</h1>
                <form className='w-full grid gap-x-24 gap-y-5 grid-cols-2'>
                    <div className='flex flex-col'>
                        <label className='font-jua text-[#FF2E2E]'>Nama</label>
                        <input className='rounded-md pl-2 py-1 text-sm disabled:bg-white' disabled={true} placeholder={user.name} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-jua text-[#FF2E2E]'>Alamat Email</label>
                        <input className='rounded-md pl-2 py-1 text-sm disabled:bg-white' disabled={true} placeholder={user.email} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-jua text-[#FF2E2E]'>Nomor Telepon</label>
                        <input className='rounded-md pl-2 py-1 text-sm disabled:bg-white' disabled={true} placeholder={user.notelp} />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-jua text-[#FF2E2E]'>Password</label>
                        <input className='rounded-md pl-2 py-1 text-sm disabled:bg-white' disabled={true} placeholder='*******' />
                    </div>
                </form>
                <div className='w-fit mt-5 flex gap-5'>
                    <Link className='bg-[#FF9100] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FF2E2E] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        UBAH
                    </Link>
                    <Link className='bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        HAPUS
                    </Link>
                    <Link href='/user/logout' className='bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        LOGOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}