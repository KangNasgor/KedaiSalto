import React, { useEffect, useState } from "react";
import { usePage, Link } from "@inertiajs/inertia-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Makanan() {
    const { makanan } = usePage().props;
    const [searchProduct, setSearchProduct] = useState([]);
    const [query, setQuery] = useState('');
    const [searchError, setSearchError] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productCount, setProductCount] = useState(0);

    const openModal = (product) => setSelectedProduct(product);
    const closeModal = () => {
        setSelectedProduct(null);
        setProductCount(0);
    }

    window.onclick = function (event) {
        if (event.target.classList.contains('modal')) {
            setSelectedProduct(null);
        }
    }

    const handleProductCountChange = (e, stock) => {
        const count = e.target.value;
        if (count === "") {
            setProductCount(count);
        }
        else {
            const value = parseInt(count, 10);
            if (!isNaN(value) && value >= 0 && value <= stock) {
                setProductCount(value);
            }
        }
    }

    const handleBuyProduct = async () => {
        try {
            const response = await axios.get('/api/user/login/check', {
                headers: { 'Accept': 'application/json' },
                withCredentials: true,
            });
            if (response.data.loggedIn === true) {
                if (productCount > 0) {
                    try {
                        const cartData = {
                            user_id : response.data.user.id,
                            product_id : selectedProduct.id,
                            quantity : productCount,
                        };
                        const res = await axios.post(`/api/user/cart/store`, cartData, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept' : 'application/json'
                            }
                        });
                        console.log(res)
                        alert('Berhasil menambahkan produk kedalam keranjang.')
                    }
                    catch (error) {
                        alert('Something went wrong, Try again.');
                    }
                }
            }
            else{
                alert('Anda harus login dahulu.');
            }
        }
        catch (error) {
            alert(error);
        }
    }

    const onDecreaseProductCount = () => setProductCount(prev => (prev > 0 ? prev - 1 : 0));
    const onIncreaseProductCount = () => setProductCount(prev => (prev < selectedProduct.stock ? prev + 1 : selectedProduct.stock));

    const handleSearch = async (e) => {
        e.preventDefault();

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
                <form className='flex items-center gap-2 bg-white rounded-md pl-3' onSubmit={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                    <input className='bg-transparent pl-2 py-1 font-jua outline-none text-sm w-full' type='text' placeholder='Search' name='search' onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit" className="font-jua text-sm text-white bg-[#FF2E2E] py-2 px-3 rounded-e-md" onClick={handleSearch}>
                        Search
                    </button>
                </form>
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
                                                    <div className="bg-[#FF2E2E] rounded-md p-8 flex gap-5">
                                                        <img src={'/storage/' + selectedProduct.image} className="w-full object-cover h-40" />
                                                        <div className="w-7/12">
                                                            <div className="mb-3">
                                                                <h1 className="font-jua text-white text-xl">{selectedProduct.name}</h1>
                                                                <h1 className="font-jua text-white text-md">Stock : {selectedProduct.stock}</h1>
                                                                <h1 className="font-jua text-white text-md">Harga : Rp{selectedProduct.price}</h1>
                                                            </div>
                                                            <div className="flex font-jua text-white rounded-md mx-auto mb-4 justify-center text-xl">
                                                                <button onClick={onDecreaseProductCount} className="bg-[#FFB42D] px-3 rounded-s-md active:scale-95">-</button>
                                                                <input type="number" value={productCount} onChange={(e) => handleProductCountChange(e, selectedProduct.stock)} className="w-4/12 text-black" />
                                                                <button onClick={onIncreaseProductCount} className="bg-[#FFB42D] px-3 rounded-e-md active:scale-95">+</button>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <button onClick={handleBuyProduct} className={`${productCount > 0 ? 'block' : 'hidden'} bg-[#FBD288] px-4 py-2 rounded-md font-jua text-[#FF2E2E] transform transition-all duration-200 hover:scale-110`}>
                                                                    Beli
                                                                </button>
                                                                <button onClick={closeModal} className="bg-[#FFB42D] px-4 py-2 rounded-md font-jua text-[#FF2E2E] transform transition-all duration-200 hover:scale-110">
                                                                    Tutup
                                                                </button>
                                                            </div>
                                                        </div>
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
                                    makanan.map((item) => (
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
                                                        <div className="bg-[#FF2E2E] rounded-md p-8 flex gap-5">
                                                            <img src={'/storage/' + selectedProduct.image} className="w-full object-cover h-40" />
                                                            <div className="w-7/12">
                                                                <div className="mb-3">
                                                                    <h1 className="font-jua text-white text-xl">{selectedProduct.name}</h1>
                                                                    <h1 className="font-jua text-white text-md">Stock : {selectedProduct.stock}</h1>
                                                                    <h1 className="font-jua text-white text-md">Harga : Rp{selectedProduct.price}</h1>
                                                                </div>
                                                                <div className="flex font-jua text-white rounded-md mb-4 text-xl">
                                                                    <button onClick={onDecreaseProductCount} className="bg-[#FFB42D] px-3 rounded-s-md active:scale-95">-</button>
                                                                    <input type="number" value={productCount} onChange={(e) => handleProductCountChange(e, selectedProduct.stock)} className="w-4/12 pl-4 text-black" />
                                                                    <button onClick={onIncreaseProductCount} className="bg-[#FFB42D] px-3 rounded-e-md active:scale-95">+</button>
                                                                </div>
                                                                <div className="flex gap-3">
                                                                    <button onClick={handleBuyProduct} className={`${productCount > 0 ? 'block' : 'hidden'} bg-[#FBD288] px-4 py-2 rounded-md font-jua text-[#FF2E2E] transform transition-all duration-200 hover:scale-110`}>
                                                                        Beli
                                                                    </button>
                                                                    <button onClick={closeModal} className="bg-[#FFB42D] px-4 py-2 rounded-md font-jua text-[#FF2E2E] transform transition-all duration-200 hover:scale-110">
                                                                        Tutup
                                                                    </button>
                                                                </div>
                                                            </div>
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