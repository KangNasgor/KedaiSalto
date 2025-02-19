import { Link, usePage } from "@inertiajs/inertia-react";
import React, {useEffect, useState} from "react";


export default function Navbar() {
    const { url } = usePage().props;

    return (
        <div className="fixed w-full justify-end hidden sm:flex pt-3 gap-6 text-2xl md:mr-7 lg:pr-10 font-jua text-white">
            <Link href="/" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                home
            </Link>
            <Link href="/user/product" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                product
            </Link>
            <Link href="/user/cart" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                keranjang
            </Link>
            <Link href="/user/order" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                order
            </Link>
            <Link href="/user/account" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                account
            </Link>
        </div>
    );
}

// Position relative makes the underline effect matches the text's length