import { Head, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Cart() {
    const [user, setUser] = useState(false);
    const { cartItems } = usePage().props;


    useEffect(() => {
        fetch(`${window.location.origin}/api/user/login/check`, {
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 404) {
                    return { 'loggedIn': false };
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                data ?
                    setUser(data.loggedIn) : setUser(null);
            })
            .catch(error => {
                console.error('Error fetching data : ' + error)
            })
    }, []);
    return (
        <div className="bg-[#FFB42D] h-screen">
            <Head title="Kedai Salto" />
            <Navbar />
            <Sidebar />
            <div className="pl-5 pt-10">
                <h1 className="text-4xl font-jua text-white">Keranjang</h1>
            </div>
            {
                <div className="mt-32">
                    {
                        user === true && cartItems.length > 0 ?
                            <div className="grid grid-cols-3 gap-5">
                                {
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex gap-5 font-jua text-white bg-[#FF2E2E]">
                                            <div className="w-7/12">
                                                <img src={'/storage/' + item.product.image} className="w-full object-cover h-40" />
                                            </div>
                                            <div className="w-5/12 pt-5">
                                                <h1 className="text-xl">{item.product.name}</h1>
                                                <h1>Jumlah : {item.quantity}</h1>
                                                <h1>Total harga : Rp{item.product.price * item.quantity}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            user === true && cartItems.length === 0 ?
                                <div>
                                    <h1 className="font-jua text-white">Keranjang kosong! Silahkan tambah produk yang anda inginkan kedalam keranjang.</h1>
                                </div>
                                :
                                <div>
                                    <h1 className="font-jua text-white">Silahkan login dahulu.</h1>
                                </div>
                    }
                </div>
            }
        </div>
    );
}