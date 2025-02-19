import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { usePage } from "@inertiajs/inertia-react";

export default function Order() {
    const { order } = usePage().props
    return (
        <div className="h-screen bg-[#FFB42D]">
            <Navbar />
            <Sidebar />
            <div className="pl-5 pt-10">
                <h1 className="text-4xl font-jua text-white">History pemesanan</h1>
            </div>
            <div>
                <h1 className="">Pesanan 1</h1>
            </div>
        </div>
    );
}