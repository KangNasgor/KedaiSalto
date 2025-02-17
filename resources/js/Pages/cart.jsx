import { Head, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Cart() {
    const [user, setUser] = useState(false);
    const [productQuantities, setProductQuantities] = useState({});
    const { cartItems } = usePage().props;

    useEffect(() => {
        if (cartItems) {
            const initialQuantities = {};
            cartItems.forEach(item => {
                initialQuantities[item.id] = item.quantity;
            });
            setProductQuantities(initialQuantities);
        }
    }, [cartItems]);

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

    const updateProductQuantity = (item_id, newQuantity) => {
        if (newQuantity < 0) return;

        try {
            setProductQuantities(prev => ({
                ...prev,
                [item_id]: newQuantity,
            }));
        }
        catch (error) {
            alert(error);
        }
    }

    const saveProduct = async () => {
        try {
            const response = await axios.put('/api/user/cart/update', {
                quantities: productQuantities
            });
            console.log(response);
        }
        catch (error) {
            alert(error)
        }
    }

    console.log(productQuantities);
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
                            <div className="px-5">
                                <div className="grid grid-cols-3 gap-5">
                                    {
                                        cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-5 font-jua text-white bg-[#FF2E2E] rounded-e-md">
                                                <div className="w-7/12">
                                                    <img src={'/storage/' + item.product.image} className="w-full object-cover h-48" />
                                                </div>
                                                <div className="w-5/12 py-5">
                                                    <h1 className="text-xl">{item.product.name}</h1>
                                                    <h1>Jumlah : {item.quantity}</h1>
                                                    <h1>Total harga : Rp{item.product.price * item.quantity}</h1>
                                                    <div className="flex font-jua text-white rounded-md  text-xl mt-3">
                                                        <button onClick={() => updateProductQuantity(item.id, productQuantities[item.id] - 1)} disabled={item.quantity <= 1} className="bg-[#FFB42D] px-3 rounded-s-md active:scale-95">-</button>
                                                        <input disabled={true} value={productQuantities[item.id]} onChange={(e) => updateProductQuantity(item.id, e.target.value)} className="w-4/12 pl-4 bg-white text-black" />
                                                        <button onClick={() => updateProductQuantity(item.id, productQuantities[item.id] + 1)} disabled={item.quantity >= item.product.stock} className="bg-[#FFB42D] px-3 rounded-e-md active:scale-95">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button className="bg-[#FF2E2E] px-3 py-2 font-jua text-white rounded-md mt-10" onClick={saveProduct}>Simpan</button>
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