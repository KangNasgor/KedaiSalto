import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Testimonial() {
    let index = 0;
    const carouselItems = document.querySelector('.carousel-item');
    const carouselChildren = document.querySelectorAll('.carousel-child');
    const totalChildren = carouselChildren.length - 1;

    useEffect(() => {
        Aos.init()
    }, []);

    const onNextCarousel = () => {
        if (index < totalChildren) {
            index++;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
        else {
            index = 0;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
    }
    const onPrevCarousel = () => {
        if (index > 0) {
            index--;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
        else {
            index = totalChildren;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    return (
        <div className="h-screen py-32 bg-[#FFB42D]">
            <h1 className="text-center text-3xl font-jua text-white font-semibold tracking-wide mb-5" data-aos="fade-right" data-aos-duration="500">Apa kata pelanggan kami?</h1>
            <div className="w-11/12 overflow-hidden mx-auto bg-[#e69f20] rounded-lg py-10 relative" data-aos="fade-up" data-aos-duration="500"> {/* Visible Div for user, this is the container of the carousel */}
                <div className="flex transform transition-all duration-300 carousel-item"> {/** This div contains all carousel children, the div is moved left and right to simulate carousel */}
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] mx-auto w-11/12 rounded-md p-5 grid grid-cols-3 justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Taka</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Mantep, sedap masakannya, rekomendasi banget deh
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Intan Kusuma</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Dimsumnya aku sekali coba langsung cocok di kedai salto
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">M Ana</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Enak banget dimsumnyaa
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] w-11/12 mx-auto rounded-md p-5 grid grid-cols-3 justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Bu Anton</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Ayam terasinya enak sekali dengan nasi anget, pas
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Mama Rizka Maulida</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Pulang kerja capek dan laper, maem kroket panas-panas barusan digoreng rasanya maknyoosss, mantapp
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <div className="bg-black py-4 px-5 mb-5 rounded-full w-fit mx-auto">
                                    <FontAwesomeIcon icon={faUser} className="text-3xl text-white " />
                                </div>
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Bapak Gumilang</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    Chicken salted egg nya juara, ayamnya empuk, bumbunya meresap, pokoke uenak poll
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full px-5 absolute top-0 left-1/2 h-full -translate-x-1/2 pointer-events-none">
                    <button onClick={onPrevCarousel} className="pointer-events-auto">
                        <div>
                            <div className="h-1 w-3 transform -rotate-45 -translate-y-px bg-white rounded-sm"></div>
                            <div className="h-1 w-3 transform rotate-45 translate-y-px bg-white rounded-sm"></div>
                        </div>
                    </button>
                    <button onClick={onNextCarousel} className="pointer-events-auto">
                        <div>
                            <div className="h-1 w-3 transform rotate-45 -translate-y-px bg-white rounded-sm"></div>
                            <div className="h-1 w-3 transform -rotate-45 translate-y-px bg-white rounded-sm"></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}