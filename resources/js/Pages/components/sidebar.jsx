import React from "react";
import { useRef } from 'react';


export default function Sidebar(){
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

    return(
        <div onClick={onSidebarClick}>
            <button className="flex flex-col gap-1 mt-2 ml-2 absolute z-20">
                <div className="h-1 rounded-md w-7 bg-black transform transition-all duration-200" ref={bar1}></div>
                <div className="h-1 rounded-md w-7 bg-black transform transition-all duration-200" ref={bar2}></div>
                <div className="h-1 rounded-md w-7 bg-black transform transition-all duration-200" ref={bar3}></div>
            </button>
            <div className="h-screen w-2/12 absolute bg-black z-10 -translate-x-full transform transition-all" ref={sidebar}></div>
        </div>
    );
}