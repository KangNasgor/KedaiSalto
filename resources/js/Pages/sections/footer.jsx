import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="h-[40vh] bg-[#FF2E2E] py-10 pl-10 pr-5 flex justify-center gap-5">
            <div className="w-5/12">
                <h1 className="font-jua text-white text-3xl">Kedai Salto</h1>
                <p className="font-jua text-white w-10/12">Kedai Salto adalah usaha kuliner yang menyajikan berbagai camilan lezat. Dengan komitmen terhadap rasa dan kualitas, Kedai Salto menawarkan hidangan yang enak dan terjangkau untuk semua!</p>
            </div>
            <div className="w-3/12">
                <h1 className="font-jua text-white text-2xl mb-5">Quick links</h1>
                <ul className="font-jua text-white">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="/user/product">Product</Link>
                    </li>
                </ul>
            </div>
            <div className="w-4/12">
                <h1 className="font-jua text-white text-2xl mb-5">Temui kami di</h1>
                <ul className="font-jua text-white">
                    <li className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <Link href="/">085876200861</Link>
                    </li>
                    <li className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faInstagram}/>
                        <Link href="/">@DapurSalto</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}