import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(){
    return(
        <div className="absolute hidden sm:flex gap-6 text-2xl mr-10 mt-1 top-2 right-0 font-jua text-white">
            <Link className="" href="/">
                home
            </Link>
            <Link className="" href="/about">
                about
            </Link>
            <Link className="" href="/">
                product
            </Link>
            <Link className="" href="/">
                review
            </Link>
        </div>
    );
}