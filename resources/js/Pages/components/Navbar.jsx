import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";


export default function Navbar() {
    const url = window.location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <div className={`fixed z-50 w-full justify-end hidden sm:flex py-4 text-2xl md:mr-7 lg:pr-10 font-jua transform transition-all duration-300 ${isScrolled > 0 ? "bg-[#FF2E2E] shadow-xl" : "bg-none shadow-none"}`}>
            <div className="flex gap-6">
                <a href="/" className={`relative ${url === "/" ? 'text-white' : 'text-white'} before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300`}>
                    home
                </a>
                <Link href="/user/product" className={`relative ${url === "/user/product" ? 'text-white' : 'text-white'} before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300`}>
                    product
                </Link>
                <Link href="/user/cart" className={`relative ${url === "/user/cart" ? 'text-white' : 'text-white'} before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300`}>
                    keranjang
                </Link>
                <Link href="/user/order" className={`relative ${url === "/user/order" ? 'text-white' : 'text-white'} before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300`}>
                    order
                </Link>
                <Link href="/user/account" className={`relative ${url === "/user/account" ? 'text-white' : 'text-white'} before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300`}>
                    account
                </Link>
            </div>
        </div>
    );
}

// Position relative makes the underline effect matches the text's length