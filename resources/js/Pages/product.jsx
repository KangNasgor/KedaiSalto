import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "../Pages/components/Navbar";

export default function Product(){
    return(
        <div className="h-screen bg-[#FFB42D]">
            <Head title="Kedai Salto"/>
            <Sidebar />
            <Navbar />
            <h1 className="font-jua text-3xl text-white w-fit mx-auto">OUR PRODUCTS</h1>
        </div>
    );
}