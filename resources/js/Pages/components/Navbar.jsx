import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(){
    return(
        <div className="absolute hidden sm:flex gap-6 text-2xl md:mr-7 lg:mr-10 mt-1 top-2 right-0 font-jua text-white">
            <Link href="/">
                home
            </Link>
            <Link href="#about">
                about
            </Link>
            <Link href="/">
                product
            </Link>
            <Link href="/">
                review
            </Link>
        </div>
    );
}