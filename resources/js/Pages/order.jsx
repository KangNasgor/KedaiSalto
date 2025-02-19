import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { usePage, Head, Link } from "@inertiajs/inertia-react";
import Swal from "sweetalert2";
import axios from "axios";

export default function Order() {
    const { order } = usePage().props;
    const { orderItem } = usePage().props;
    const [products, setProducts] = useState({});
    const [file, setFile] = useState(null);
    const [modal, setModal] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = async () => {
            try {
                const response = await axios.get('/api/user/login/check', {
                    headers: {
                        'Accept': 'application/json',
                    }
                })
                if (response.data.loggedIn) {
                    setLoggedIn(response.data.loggedIn);
                }
                else {
                    setLoggedIn(false);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        isLoggedIn();
    }, []);

    useEffect(() => {
        if (orderItem) {
            const initialProducts = {};
            orderItem.forEach(item => {
                if (!initialProducts[item.order_id]) {
                    initialProducts[item.order_id] = [];
                }
                initialProducts[item.order_id].push(item.product_id);
            });
            setProducts(initialProducts);
        }
    }, [orderItem]);

    const toggleModal = (id) => {
        setModal(modal === id ? null : id);
    };

    window.onclick = function (e) {
        if (e.target.classList.contains('modal')) {
            setModal(null);
        }
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const uploadFile = async (user_id, order_id) => {
        if (!file) {
            Swal.fire({
                title: 'Silahkan pilih file!',
                icon: 'warning',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E'
            });

            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('order_id', order_id);
        formData.append('user_id', user_id);

        try {
            const response = await axios.post('/user/payment/store', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 200) {
                Swal.fire({
                    title: 'Berhasil mengunggah bukti',
                    icon: 'success',
                    showConfirmButton: false,
                    position: "top-end",
                    toast: true,
                    timer: 900,
                    timerProgressBar: true,
                });
                toggleModal();
                setTimeout(() => window.location.reload(), 900);
            }
        }
        catch (error) {
            console.error(error)
            Swal.fire({
                title: 'Gagal mengunggah bukti',
                text: 'Coba lagi nanti.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E',
            })
        }
    }

    return (
        <div>
            <div className="h-fit min-h-screen pb-10 bg-[#FFB42D]">
                <Head title="Kedai Salto" />
                <Navbar />
                <Sidebar />
                <div className="pl-5 pt-10">
                    <h1 className="text-4xl font-jua text-white">History pemesanan</h1>
                </div>
                <div className="w-10/12 mx-auto flex flex-col gap-5 mt-36">
                    {
                        order && loggedIn === true ? order.map((order) => (
                            <div className="bg-[#e69f20] w-full flex gap-5 items-center rounded-md px-4 py-4" key={order.id}>
                                <div className="grid grid-cols-3 gap-5 mb-5 w-6/12">
                                    {
                                        orderItem.filter(item => item.order_id === order.id).map(item => (
                                            <div key={item.id}>
                                                <img src={"/storage/" + item.product.image} className="w-36" />
                                                <h1 className="font-jua text-white">{item.product.name}</h1>
                                                <h1 className="font-jua text-white">Jumlah : {item.quantity}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="w-6/12">
                                    <h1 className="font-jua text-white">Total harga : Rp{order.price}</h1>
                                    <h1 className="font-jua text-white">Status : {order.confirmed === "False" ? 'Belum di konfirmasi' : 'Terkonfirmasi'}</h1>
                                    <button onClick={() => toggleModal(order.id)} className={`px-3 py-2 rounded-md font-jua text-white bg-[#FF2E2E] mt-3 ${order.confirmed === "False" ? 'block' : 'hidden'}`}>Upload bukti pembayaran</button>
                                    {
                                        modal &&
                                        <div className="bg-black/50 h-full min-h-screen w-full z-30 fixed flex top-0 left-0 modal justify-center items-center">
                                            <div className="bg-[#FF2E2E] p-3 rounded-md text-white font-jua">
                                                <h1>Silahkan upload bukti pembayaran :</h1>
                                                <input type="file" className="file:bg-white file:border-none hover:file:bg-slate-300 file:transform file:transition-all file:duration-200 file:rounded-md" onChange={handleFileChange} />
                                                <button onClick={() => uploadFile(order.user.name, modal)} className="px-3 py-2 rounded-md font-jua text-[#FF2E2E] bg-[#FFB42D] mt-3">Upload</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        ))
                            : loggedIn === true ?
                                <div className="w-full flex justify-center items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <h1 className="font-jua text-white/50 text-5xl text-center">Order kosong, silahkan checkout produk dari keranjang!</h1>
                                    </div>
                                </div>
                                :
                                <div className="w-full flex justify-center items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <h1 className="font-jua text-white text-5xl">Silahkan login dahulu.</h1>
                                        <Link href="/user/login" className="w-fit px-5 py-3 bg-[#FF2E2E] hover:bg-[#FBD288] hover:scale-105 transform transition-all duration-200 rounded-lg font-jua text-[#FFB42D] hover:text-[#FF2E2E] text-2xl">Login</Link>
                                    </div>
                                </div>

                    }
                </div>
            </div>
        </div>
    );
}