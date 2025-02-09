import React from "react";
import { useRef } from 'react';
import { Link,usePage } from "@inertiajs/inertia-react";
import { faCircleInfo, faHouse, faBowlFood, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Sidebar({ user }) {
    const bar1 = useRef(null);
    const bar2 = useRef(null);
    const bar3 = useRef(null);
    const sidebar = useRef(null);

    const onSidebarClick = () => {
        bar1.current.classList.toggle("translate-y-2");
        bar1.current.classList.toggle("rotate-45")
        bar1.current.classList.toggle("bg-white")
        bar2.current.classList.toggle("opacity-0");
        bar3.current.classList.toggle("-translate-y-2");
        bar3.current.classList.toggle("-rotate-45");
        bar3.current.classList.toggle("bg-white");
        sidebar.current.classList.toggle("translate-x-0");
    }

    const { url } = usePage();

    return (
        <div className="sm:hidden">
            <button className="flex flex-col gap-1 mt-3 ml-3 absolute z-20" onClick={onSidebarClick}>
                <div className="h-1 rounded-md w-7 bg-[#FFFF] transform transition-all duration-200" ref={bar1}></div>
                <div className="h-1 rounded-md w-7 bg-[#FFFF] transform transition-all duration-200" ref={bar2}></div>
                <div className="h-1 rounded-md w-7 bg-[#FFFF] transform transition-all duration-200" ref={bar3}></div>
            </button>
            <div className="h-screen w-7/12 flex flex-col gap-4 absolute bg-[#FF4545] z-10 -translate-x-full transform transition-all pt-12" ref={sidebar}>
                <Link href="/">
                    <div className={`text-black py-5 pl-5 w-11/12 mx-auto rounded-md items-center flex gap-4 transform transition-all duration-200 hover:bg-white/20 ${url === "/" ? "bg-white/20" : "bg-none"}`}>
                        <FontAwesomeIcon icon={faHouse} className="text-md text-white"/>
                        <p className="w-fit text-white font-semibold font-jua tracking-wide text-md">Home</p>
                    </div>  
                </Link>
                <Link href="#about">
                    <div className={`text-black py-5 pl-5 w-11/12 mx-auto rounded-md items-center flex gap-4 transform transition-all duration-200 hover:bg-white/20 ${url === "/about" ? "bg-white/20" : "bg-none"}`}>
                        <FontAwesomeIcon icon={faCircleInfo} className="text-md text-white"/>
                        <p className="w-fit text-white font-semibold font-jua tracking-wide text-md">About</p>
                    </div>
                </Link>
                <Link href="/user/product">
                    <div className={`text-black py-5 pl-5 w-11/12 mx-auto rounded-md items-center flex gap-4 transform transition-all duration-200 hover:bg-white/20 ${url === "/about" ? "bg-white/20" : "bg-none"}`}>
                        <FontAwesomeIcon icon={faBowlFood} className="text-md text-white"/>
                        <p className="w-fit text-white font-semibold font-jua tracking-wide text-md">Product</p>
                    </div>
                </Link>
                <Link href="/user/account">
                    <div className={`text-black py-5 pl-5 w-11/12 mx-auto rounded-md items-center flex gap-4 transform transition-all duration-200 hover:bg-white/20 ${url === "/about" ? "bg-white/20" : "bg-none"}`}>
                        <FontAwesomeIcon icon={faUser} className="text-md text-white"/>
                        <p className="w-fit text-white font-semibold font-jua tracking-wide text-md">Account</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}