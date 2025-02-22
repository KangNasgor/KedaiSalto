import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial() {
    let index = 0;
    const carouselItems = document.querySelector('.carousel-item');
    const carouselChildren = document.querySelectorAll('.carousel-child');
    const totalChildren = carouselChildren.length - 1;

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
        <div className="h-screen pt-28 bg-[#FFB42D]">
            <div className="w-11/12 overflow-hidden mx-auto bg-[#e69f20] rounded-lg py-10 relative"> {/* Visible Div for user, this is the container of the carousel */}
                <div className="flex transform transition-all duration-300 carousel-item"> {/** This div contains all carousel children, the div is moved left and right to simulate carousel */}
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] mx-auto w-11/12 rounded-md p-5 flex justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Yanto</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Aeri</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Rex</h1>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] w-11/12 mx-auto rounded-md p-5 flex justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Yizhuo</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Darren</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Makarov</h1>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] w-11/12 mx-auto rounded-md p-5 flex justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Rabbani</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Minjeong</h1>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <h1 className="font-jua text-black">Zaenal</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full px-5 absolute top-0 left-1/2 h-full -translate-x-1/2">
                    <button onClick={onPrevCarousel}>
                        <div>
                            <div className="h-1 w-3 transform -rotate-45 -translate-y-px bg-white rounded-sm"></div>
                            <div className="h-1 w-3 transform rotate-45 translate-y-px bg-white rounded-sm"></div>
                        </div>
                    </button>
                    <button onClick={onNextCarousel}>
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