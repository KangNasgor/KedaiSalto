import React, { useEffect, useState } from "react";

export default function Testimonial() {
    let index = 0;
    const carouselItems = document.querySelector('.carousel-item');
    const carouselChildren = document.querySelectorAll('.carousel-child');

    const onNextCarousel = () => {
        const totalChildren = carouselChildren.length - 1;
        if (index < totalChildren) {
            index++;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
    }
    const onPrevCarousel = () => {
        if (index > 0) {
            index--;
            carouselItems.style.transform = `translateX(-${index * 100}%)`;
        }
    }

    return (
        <div className="h-screen bg-[#FFB42D]">
            <div className="w-11/12 overflow-hidden mx-auto bg-[#e69f20] rounded-lg py-10">
                <div className="flex transform transition-all duration-300 carousel-item">
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
            </div>
            <div className="flex w-full justify-between">
                <button onClick={onPrevCarousel}>Prev</button>
                <button onClick={onNextCarousel}>Next</button>
            </div>
        </div>
    );
}