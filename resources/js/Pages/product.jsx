import { Head, usePage, Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "../Pages/components/Navbar";
import Makanan from "./sections/makanan";
import Minuman from "./sections/minuman";

export default function Product() {
    const [productType, setProductType] = useState('food');
    const {loggedIn} = usePage().props;

    console.log(loggedIn);

    return (
        <div className="h-fit bg-[#FFB42D] pb-24">
            <Head title="Kedai Salto" />
            <Sidebar />
            <Navbar />
            <div className="pl-5 pt-10">
                <h1 className="text-4xl font-jua text-white">Produk kami</h1>
            </div>
            <div className="mt-10 lg:mt-32 pr-5 md:pr-0 pl-5 flex flex-col md:flex-row">
                <div className="w-fit mb-5 md:mb-0 md:w-3/12">
                    <div className="bg-[#FF2E2E] w-fit px-5 py-2 rounded-md flex md:flex-none">
                        <h1 className="font-jua text-white mb-2">Types :</h1>
                        <div>
                            <h2 className={`font-jua ml-2 cursor-pointer ${productType === 'food' ? 'text-[#FFB42D]' : 'text-white'}`} onClick={() => setProductType('food')}>Makanan</h2>
                            <h2 className={`font-jua ml-2 cursor-pointer ${productType === 'drink' ? 'text-[#FFB42D]' : 'text-white'}`} onClick={() => setProductType('drink')}>Minuman</h2>
                        </div>
                    </div>
                </div>
                {
                    productType === 'food' ?
                        <Makanan />
                        :
                        <Minuman />
                }
            </div>
        </div>
    );
}