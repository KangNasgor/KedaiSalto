import React, { useEffect, useState } from 'react'
import { Head, Link, usePage } from '@inertiajs/inertia-react'
import { faArrowLeft, faEye, faEyeSlash, faLock, faEnvelope, faUser, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Account() {
    const { user } = usePage().props;
    const [editModal, setEditModal] = useState(false);
    const [formEditData, setFormEditData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword(prev => !prev);

    useEffect(() => {
        setFormEditData({
            id: user.id,
            nama: user.name,
            address: user.address,
            email: user.email,
            notelp: user.notelp,
            password: '',
        });
    }, [editModal]);

    window.onclick = function (e) {
        if (e.target.classList.contains('modal')) {
            setEditModal(false);
        }
    }

    const handleEditChange = (e) => {
        setFormEditData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const submitEditAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('/api/user/account/edit', formEditData, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            })

            if (response.status === 200) {
                Swal.fire({
                    title: 'Berhasil mengubah akun!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#FFB42D'
                }).then(window.location.reload());
            }
            else {
                Swal.fire({
                    title: 'Gagal mengubah akun!',
                    icon: 'error',
                    text: 'Error ' + response.status,
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#FFB42D'
                });
            }
        }
        catch (error) {
            Swal.fire({
                title: 'Gagal mengubah akun!',
                icon: 'error',
                text: error.response.data.message,
                confirmButtonText: 'OK',
                confirmButtonColor: '#FFB42D'
            });
        }
    }


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
                        <label className='font-jua text-[#FF2E2E]'>Alamat</label>
                        <input className='rounded-md pl-2 py-1 text-sm disabled:bg-white' disabled={true} placeholder={user.address ? user.address : 'Alamat belum dipilih'} />
                    </div>
                </form>
                <div className='w-fit mt-5 flex gap-5'>
                    <button onClick={() => setEditModal(true)} className='bg-[#FF9100] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FF2E2E] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                        UBAH
                    </button>
                    {
                        editModal === true &&
                        <div className='bg-black/50 h-screen w-full fixed top-0 left-0 z-30 flex justify-center items-center modal'>
                            <div className='p-5 rounded-md bg-[#FF2E2E]'>
                                <h1 className='font-jua text-white text-2xl'>Ubah akun anda</h1>
                                <form className='w-full grid gap-x-24 gap-y-5 grid-cols-2' onSubmit={submitEditAccount}>
                                    <div className=''>
                                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                            <FontAwesomeIcon icon={faUser} />
                                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type='text' placeholder='johndoe' name='nama' value={formEditData.nama} required={true} onChange={handleEditChange} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type='email' placeholder='johndoe123@gmail.com' name='email' value={formEditData.email} required={true} onChange={handleEditChange} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type='number' placeholder='08123456789' name='notelp' value={formEditData.notelp} required={true} onChange={handleEditChange} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type="text" placeholder='Alamat anda' name='address' value={formEditData.address} onChange={handleEditChange} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                                            <FontAwesomeIcon icon={faLock} />
                                            <input className='bg-transparent w-full pl-2 py-1 font-jua outline-none text-sm' type={showPassword === false ? 'password' : 'text'} placeholder='********' name='password' value={formEditData.password} required={true} onChange={handleEditChange} />
                                            <FontAwesomeIcon icon={showPassword === false ? faEye : faEyeSlash} onClick={toggleShowPassword} />
                                        </div>
                                    </div>
                                    <div className='flex gap-4'>
                                        <button type='submit' className='bg-[#FFB42D] hover:bg-[#FF9100] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FF2E2E] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                                            Simpan
                                        </button>
                                        <button onClick={() => setEditModal(false)} className='bg-[#bd2222] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-[#FFB42D] hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                                            Batal
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
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