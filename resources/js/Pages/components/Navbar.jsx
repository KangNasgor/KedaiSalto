import { Link, usePage } from "@inertiajs/inertia-react";
import React, {useEffect, useState} from "react";


export default function Navbar() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch('api/test', {
            credentials: 'same-origin',
        })
            .then(response => response.json())
            .then(data => {
                data ?
                    setUser(data.loggedIn) : setUser('null');
            })
            .catch(error => {
                console.error('Error fetching data : ' + error)
            })
    }, []);
    return (
        <div className="absolute hidden sm:flex gap-6 text-2xl md:mr-7 lg:mr-10 mt-1 top-2 right-0 font-jua text-white">
            <Link href="/" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                home
            </Link>
            <Link href="#about" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                about
            </Link>
            <Link href="/user/product" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                product
            </Link>
            <Link href="/user/account" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                account
            </Link>
            {
                user === true ?
                    <Link href="/user/logout" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                        logout
                    </Link>
                    :
                    <Link href="/user/login" className="relative before:h-1 before:absolute before:bg-white before:content-[''] before:w-0 before:bottom-0 before:rounded-md before:hover:w-full before:transition-all before:duration-300">
                        login
                    </Link>
            }
        </div>
    );
}

// Position relative makes the underline effect matches the text's length