import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(){
    return(
        <div className="absolute hidden sm:flex gap-6 text-2xl md:mr-7 lg:mr-10 mt-1 top-2 right-0 font-jua text-white">
            <Link href="/" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                home
            </Link>
            <Link href="#about" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                about
            </Link>
            <Link href="/" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                product
            </Link>
            <Link href="/" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                review
            </Link>
        </div>
    );
}

// Position relative makes the underline effect matches the text's length