import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "../Pages/components/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
    return (
        <div className="h-screen bg-[#FFB42D]">
            <Head title="Kedai Salto" />
            <Sidebar />
            <Navbar />
            <div className="pt-10 pl-5">
                <h1 className="font-jua text-4xl text-white w-fit">OUR PRODUCTS</h1>
            </div>
            <div className="mt-32 pl-5 flex">
                <div className="w-3/12">
                    <h1 className="font-jua text-white mb-2">Types</h1>
                    <h2 className="font-jua text-white ml-2">Makanan</h2>
                    <h2 className="font-jua text-white ml-2">Minuman</h2>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="font-jua text-white">Search Product :</h1>
                        <div className='flex items-center gap-2 bg-white rounded-md px-3 py-1'>
                            <FontAwesomeIcon icon={faSearch} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='text' placeholder='Search' name='notelp' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}