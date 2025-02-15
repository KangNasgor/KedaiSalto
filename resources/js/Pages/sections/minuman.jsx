import React, { useState } from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Minuman() {
    const { minuman } = usePage().props;
    const [searchProduct, setSearchProduct] = useState([]);
    const [query, setQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => setSelectedProduct(null);

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            setSelectedProduct(null);
        }
    }

    const handleSearch = async (e) => {
        if (query) {
            try {
                const res = await axios.get(`/api/user/product/search/${query}`);
                setSearchProduct(res.data);
            }
            catch (error) {
                setSearchError('Error searching product');
            }
        }
        else {
            setSearchProduct([]);
        }
    }
    return (
        <div className="w-full md:w-9/12">
            <div className="flex items-center gap-2 mb-5">
                <div className='flex items-center gap-2 bg-white rounded-md pl-3'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='text' placeholder='Search' name='search' onChange={(e) => setQuery(e.target.value)} />
                    <button className="font-jua text-sm text-white bg-[#FF2E2E] py-2 px-3 rounded-e-md" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="bg-[#e69f20] w-full h-fit rounded-t-md">
                {
                    searchError !== '' ?
                        <h1>{searchError}</h1>
                        :
                        searchProduct.length > 0 ?
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5">{
                                searchProduct.map((product) => (
                                    <div key={product.id} className="bg-[#FF2E2E] rounded-b-md">
                                        <img src={'/storage/' + product.image} className="w-full object-cover h-40" />
                                        <div className="p-3">
                                            <h1 className="font-jua text-white">{product.name}</h1>
                                            <h1 className="font-jua text-white">Rp{product.price}</h1>
                                            <button onClick={() => openModal(product)} className='bg-[#FFB42D] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-white block mt-5 hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                                                BUY NOW
                                            </button>
                                        </div>
                                        {
                                            selectedProduct && selectedProduct.id === product.id && (
                                                <div className="bg-black/75 h-screen w-full fixed flex items-center justify-center inset-0 modal">
                                                    <div className="bg-[#FF2E2E] rounded-md p-5">
                                                        <img src={'/storage/' + selectedProduct.image} className="w-full object-cover h-40" />
                                                        <h1 className="font-jua text-white text-xl">{selectedProduct.name}</h1>
                                                        <h1 className="font-jua text-white text-md">Stock : {selectedProduct.stock}</h1>
                                                        <h1 className="font-jua text-white text-md">Harga : {selectedProduct.price}</h1>
                                                        <button onClick={closeModal}>Tutup</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                            </div>
                            :
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5">
                                {
                                    minuman.map((item) => (
                                        <div key={item.id} className="bg-[#FF2E2E] rounded-b-md">
                                            <img src={'/storage/' + item.image} className="w-full object-cover h-40" />
                                            <div className="p-3">
                                                <h1 className="font-jua text-white">{item.name}</h1>
                                                <h1 className="font-jua text-white">Rp{item.price}</h1>
                                                <button onClick={() => openModal(item)} className='bg-[#FFB42D] hover:bg-[#FFB42D] sm:hover:bg-[#FBD288] rounded-xl w-fit px-4 py-3 text-white block mt-5 hover:text-[#FF2E2E] hover:scale-110 active:scale-105 font-jua transition-all duration-200 ease-in-out'>
                                                    BUY NOW
                                                </button>
                                            </div>
                                            {
                                                selectedProduct && selectedProduct.id === item.id && (
                                                    <div className="bg-black/75 h-screen w-full fixed flex items-center justify-center inset-0 modal">
                                                        <div className="bg-[#FF2E2E] rounded-md p-5">
                                                            <img src={'/storage/' + selectedProduct.image} className="w-full object-cover h-40" />
                                                            <h1 className="font-jua text-white text-xl">{selectedProduct.name}</h1>
                                                            <h1 className="font-jua text-white text-md">Stock : {selectedProduct.stock}</h1>
                                                            <h1 className="font-jua text-white text-md">Harga : {selectedProduct.price}</h1>
                                                            <button onClick={closeModal}>Tutup</button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                }
            </div>
        </div>
    );
}