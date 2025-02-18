import { Head, usePage, Link } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { faFloppyDisk, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

export default function Cart() {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [productQuantities, setProductQuantities] = useState({});
    const [priceTotal, setPriceTotal] = useState(0);
    const { cartItems } = usePage().props;
    const [promoCode, setPromoCode] = useState('');

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
                    setUser(response.data.user);
                }
                else {
                    setLoggedIn(null);
                }
            }
            catch (error) {
                console.log(error);
            }
        }

        isLoggedIn();
    }, []);

    useEffect(() => {
        if (cartItems) {
            const initialQuantities = {};
            cartItems.forEach(item => {
                initialQuantities[item.id] = item.quantity;
            });
            let price = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
            setPriceTotal(price);
            setProductQuantities(initialQuantities);
        }
    }, [cartItems]);

    const updateProductQuantity = (item_id, newQuantity) => {
        if (newQuantity < 0) return;
        try {
            setProductQuantities(prev => ({
                ...prev,
                [item_id]: newQuantity,
            }));
        }
        catch (error) {
            alert('Gagal mengubah produk, coba lagi nanti.');
        }
    }

    const saveProduct = async () => {
        try {
            const response = await axios.put('/api/user/cart/update', {
                quantities: productQuantities
            });
            Swal.fire({
                title: 'Berhasil!',
                text: 'Berhasil mengubah produk',
                icon: 'success',
                showConfirmButton: false,
                toast: true,
                position: "top-end",
                timer: 2000,
                timerProgressBar: true,
            });
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
        catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Coba lagi nanti.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E',
            })
        }
    }
    const checkout = async () => {
        if (cartItems) {
            try {
                const orderData = {
                    user_id: user.id,
                    products: cartItems.map(item => ({
                        product_id: item.product.id,
                        quantity: item.quantity,
                    })),
                    promo_code: promoCode,
                    price: priceTotal,
                }
                const response = await axios.post('/api/user/cart/checkout', orderData, {
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                console.log(response.data.message);

                Swal.fire({
                    title: 'Success!',
                    icon: 'success',
                    text: 'Berhasil checkout pesanan!',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#FF2E2E',
                });
            }
            catch (error) {
                Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: 'Gagal checkout pesanan, coba lagi nanti.',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#FF2E2E',
                });
            }
        }
        else {
            Swal.fire({
                title: 'Keranjang Kosong!',
                text: 'Silahkan tambahkan produk ke keranjang.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF2E2E'
            });
        }
    }

    return (
        <div className={`bg-[#FFB42D] ${loggedIn === false || loggedIn === null || cartItems.length === 0 ? 'h-screen' : 'h-fit pb-10'}`}>
            <Head title="Kedai Salto" />
            <Navbar />
            <Sidebar />
            <div className="pl-5 pt-10">
                <h1 className="text-4xl font-jua text-white">Keranjang</h1>
            </div>
            {
                <div className="mt-32">
                    {
                        loggedIn === true && cartItems.length > 0 ?
                            <div className="px-5">
                                <div className="grid grid-cols-3 gap-5">
                                    {
                                        cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-5 font-jua text-white bg-[#FF2E2E] rounded-e-md">
                                                <div className="w-7/12">
                                                    <img src={'/storage/' + item.product.image} className="w-full object-cover h-48" loading="lazy" />
                                                </div>
                                                <div className="w-5/12 py-5">
                                                    <h1 className="text-xl">{item.product.name}</h1>
                                                    <h1>Jumlah : {item.quantity}</h1>
                                                    <h1>Total harga : Rp{item.product.price * item.quantity}</h1>
                                                    <div className="flex font-jua text-white rounded-md  text-xl mt-3">
                                                        <button onClick={() => updateProductQuantity(item.id, productQuantities[item.id] - 1)} disabled={item.quantity === 0} className="bg-[#FFB42D] px-3 rounded-s-md active:scale-95">-</button>
                                                        <input disabled={true} value={productQuantities[item.id]} onChange={(e) => updateProductQuantity(item.id, e.target.value)} className="w-4/12 pl-4 bg-white text-black" />
                                                        <button onClick={() => updateProductQuantity(item.id, productQuantities[item.id] + 1)} disabled={item.quantity >= item.product.stock} className="bg-[#FFB42D] px-3 rounded-e-md active:scale-95">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="bg-[#FF2E2E] px-3 py-2 font-jua text-white rounded w-fit mt-10">
                                    <h1>Total harga : Rp{priceTotal}</h1>
                                </div>
                                <div className="bg-[#FF2E2E] px-3 py-2 font-jua rounded w-fit mt-10">
                                    <h1 className="mb-3 text-white">Punya kode promo?</h1>
                                    <input placeholder="ABCDE" className="rounded-md px-2 text-black" value={promoCode} onChange={e => setPromoCode(e.target.value)} />
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-[#FF2E2E] px-3 py-2 font-jua text-white rounded-md mt-5" onClick={saveProduct}>
                                        <FontAwesomeIcon icon={faFloppyDisk} className="mr-3" />
                                        Simpan
                                    </button>
                                    <button className="bg-[#FF2E2E] px-3 py-2 font-jua text-white rounded-md mt-5" onClick={checkout}>
                                        <FontAwesomeIcon icon={faMoneyBill} className="mr-3" />
                                        Checkout
                                    </button>
                                </div>
                            </div>
                            :
                            loggedIn === true && cartItems.length === 0 ?
                                <div className="w-full flex justify-center items-center">
                                    <div className="flex flex-col items-center gap-3">
                                        <h1 className="font-jua text-white text-5xl text-center">Keranjang kosong, silahkan tambahkan produk kedalam keranjang!</h1>
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
            }
        </div>
    );
}