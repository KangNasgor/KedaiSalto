import { Head } from "@inertiajs/inertia-react";
import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "../Pages/components/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
    const [productType, setProductType] = useState('food');
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
                    <h2 className="font-jua text-white ml-2 cursor-pointer" onClick={() => setProductType('food')}>Makanan</h2>
                    <h2 className="font-jua text-white ml-2 cursor-pointer" onClick={() => setProductType('drink')}>Minuman</h2>
                </div>
                <div className="w-9/12">
                    <div className="flex items-center gap-2 mb-5">
                        <h1 className="font-jua text-white">Search Product :</h1>
                        <div className='flex items-center gap-2 bg-white rounded-md pl-3'>
                            <FontAwesomeIcon icon={faSearch} />
                            <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='text' placeholder='Search' name='notelp' />
                            <button className="font-jua text-sm text-white bg-[#FF2E2E] py-2 px-3 rounded-e-md">
                                Enter
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#e69f20] w-full h-fit rounded-t-md">
                        {
                            productType === 'food' ? 
                            <Makanan />
                            :
                            <Minuman />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function Makanan(){
    return(
        <h1>Ini Makanan</h1>
    );
}
function Minuman(){
    return(
        <h1>Ini Minuman</h1>
    );
}