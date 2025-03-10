import React from 'react'
import Hero from './sections/hero'
import About from './sections/about'
import { Head, Link } from '@inertiajs/inertia-react'
import { faArrowLeft, faEnvelope, faLocationDot, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'
import { useState } from 'react'
import Swal from "sweetalert2";
import Navbar from '../Pages/components/Navbar'
import Sidebar from '../Pages/components/Sidebar'
import axios from 'axios'

export default function Register() {
    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        notelp: '',
        address: '',
    });
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value
        setFormData(formData => ({
            ...formData,
            [key]: value,
        }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('/user/register/store', formData, {
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
            });
            Swal.fire({
                title: 'Berhasil membuat akun!',
                icon: 'success',
                showConfirmButton: false,
                toast: true,
                position: "top-end",
                timer: 2000,
                timerProgressBar: true,
            });
        }
        catch (error) {
            Swal.fire({
                title: 'Gagal membuat akun!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E',
            });
        }
    }

    const toggleShowPassword = () => setShow(prev => !prev);
    return (
        <div className='h-screen bg-[#FFB42D]'>
            <Head title='DapurSalto' />
            <Sidebar />
            <Navbar />
            <div className='flex items-center justify-center pt-20'>
                <div className='w-6/12 mx-auto'>
                    <h1 className='font-jua text-[#FF2E2E] text-4xl mx-auto w-fit mb-5'>Register</h1>
                    <form className='w-5/12 mx-auto grid gap-x-24 mb-5 gap-y-2 grid-cols-1' method='POST' onSubmit={handleSubmit}>
                        <div>
                            <label className='font-jua text-[#FF2E2E] text-lg'>Nama</label>
                            <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                <FontAwesomeIcon icon={faUser} />
                                <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='text' placeholder='John Smith' name='name' required={true} value={formData.name} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className='font-jua text-[#FF2E2E] text-lg'>Email</label>
                            <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='johnsmith@gmail.com' name='email' required={true} value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className='font-jua text-[#FF2E2E] text-lg'>No. Telepon</label>
                            <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                <FontAwesomeIcon icon={faPhone} />
                                <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='number' placeholder='08123456789' name='notelp' required={true} value={formData.notelp} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className='font-jua text-[#FF2E2E] text-lg'>Alamat</label>
                            <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='text' placeholder='Jl. Lorem Ipsum, Tugu, Tugurejo, Semarang' name='address' required={true} value={formData.address} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label className='font-jua text-[#FF2E2E] text-lg'>Password</label>
                            <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                <FontAwesomeIcon icon={faLock} />
                                <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type={show === false ? 'password' : 'text'} placeholder='********' name='password' required={true} value={formData.password} onChange={handleChange} />
                                <FontAwesomeIcon icon={show === false ? faEye : faEyeSlash} onClick={toggleShowPassword} />
                            </div>
                        </div>
                        <button type='submit' className='block mt-5 mx-auto bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out mb-4'>
                            Register
                        </button>
                    </form>
                    <Link href='/user/login' className='font-jua text-[#FF2E2E] w-fit mx-auto block'>Sudah punya akun?</Link>
                </div>
            </div>
        </div>
    )
}