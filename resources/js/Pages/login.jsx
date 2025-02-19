import React, {useState} from 'react'
import Hero from './sections/hero'
import About from './sections/about'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { faArrowLeft, faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Inertia } from '@inertiajs/inertia'
import Navbar from './components/Navbar'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Login() {
    const [show, setShow] = useState(false);
    const toggleShowPassword = () => setShow(prev => !prev);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData(formData => ({
            ...formData,
            [e.target.name] : e.target.value,
        }));
    }
    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            formData._token = document.querySelector('meta[name="csrf-token"]').content;
            Inertia.post('/user/login/store', formData, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type' : 'application/json'
                }
            });
            
            Swal.fire({
                title: 'Berhasil login!',
                icon: 'success',
                showConfirmButton: false,
                toast: true,
                position: "top-end",
                timer: 2000,
                timerProgressBar: true,
            });
        }
        catch(error){
            Swal.fire({
                title: 'Gagal login!',
                icon: 'error',
                text: 'Coba lagi nanti',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E',
            });
        }
    }
    return (
        <div className='h-screen bg-[#FFB42D]'>
            <Head title='DapurSalto' />
            <Navbar />
            <div className='w-6/12 left-0 right-0 m-auto absolute top-2/4 transform -translate-y-2/4 '>
                <h1 className='font-jua text-[#FF2E2E] text-4xl mx-auto w-fit mb-5'>Login</h1>
                <form className='w-5/12 mx-auto grid gap-x-24 mb-5 gap-y-2 grid-cols-1' method='POST' onSubmit={handleSubmit}>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>Email</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='johnsmith@gmail.com' name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label className='font-jua text-[#FF2E2E] text-lg'>Password</label>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faLock} />
                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type={show === false ? 'password' : 'text'} placeholder='********' name='password' value={formData.password} onChange={handleChange}/>
                            <FontAwesomeIcon icon={show === false ? faEye : faEyeSlash} onClick={toggleShowPassword}/>
                        </div>
                    </div>
                    <button type='submit' className='block mb-4 mt-5 mx-auto bg-[#FF2E2E] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        Login
                    </button>
                </form>
                <Link href='/user/register' className='font-jua text-[#FF2E2E] w-fit mx-auto block'>Belum punya akun?</Link>
            </div>
        </div>
    )
}