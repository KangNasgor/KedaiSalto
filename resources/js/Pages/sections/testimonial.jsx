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
                        <div className="bg-[#FF2E2E] mx-auto w-11/12 rounded-md p-5 grid grid-cols-3 justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/admetal.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Adi Rabbani</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "Saya selalu jadi pelanggan setia Kedai Salto! Dumpling-nya enak banget, es lumut-nya juga segar. Pokoknya, tempat ini jadi favorit banget deh buat nongkrong sambil nyemil."
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/jijel.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">GISELLE</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "너무 맛있어요! 다음에 또 먹고 싶어요~" (Ini enak banget! Mau makan lagi lain kali~)
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/prx.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">PRX f0rsaken</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "Bro, Kedai Salto tuh beneran next level! Dumpling-nya legit enak, mashed potatoes-nya juga lembut banget. Kalau lagi butuh energi sebelum main, makanan di sini sih wajib banget! EZ win kalau udah makan di Kedai Salto.""
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] w-11/12 mx-auto rounded-md p-5 grid grid-cols-3 justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/ningning.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">NINGNING</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "진짜 맛있다! 진짜 최고야~" (Beneran enak banget! Beneran yang terbaik~)
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/darren.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">IShowSpeed</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "YO CHAT! I just tried Kedai Salto and OMG—THIS STUFF IS CRAZY!!!🔥🔥 Dumplings? BUSSIN’. Es lumut? REFRESHING AS HELL! WOOOO!!! 10/10, W TESTIMONIAL, W FOOD, W INDONESIA!!! LET’S GOOOOOO!!!"
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/jokowi.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">Joko Widodo</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "Kedai Salto ini makanannya enak sekali. Dumpling-nya gurih, es lumut-nya segar. Harganya juga terjangkau, cocok untuk semua kalangan. Saya rasa ini bisa jadi salah satu kuliner favorit masyarakat. Maju terus UMKM Indonesia!"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="min-w-full carousel-child">
                        <div className="bg-[#FF2E2E] w-11/12 mx-auto rounded-md p-5 grid grid-cols-3 justify-center gap-5">
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/gojosaturujpg.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">M.Yahya Abdurrohim</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "Kedai Salto tuh kayak tempat makan yang nggak pernah gagal bikin happy. Mashed potatoes-nya lembut dan bumbu-nya pas. Harganya juga ramah di kantong, jadi sering mampir."
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/winteo.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">WINTER</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "와~ 이거 진짜 대박이에요! 덤플링 너무 촉촉하고 맛있어요. 그리고 에스 루뭇은 진짜 상쾌해요! 다음에 또 먹고 싶어요~ 꼭 다시 올게요! 💙" (Wow~ Ini beneran luar biasa! Dumpling-nya super juicy dan enak banget. Terus es lumut-nya segar banget! Mau makan lagi lain kali~ Pasti bakal datang lagi! 💙)
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded-md">
                                <img src="/asset/gw.jpg" className="object-cover object-center w-32 h-32 rounded-full mx-auto" />
                                <h1 className="font-jua text-[#FF2E2E] w-fit mx-auto text-lg font-semibold tracking-wide">KangNasgor</h1>
                                <p className="font-jua text-[#FF2E2E] text-center text-sm">
                                    "Heed my words-KedaiSalto is a place of fleeting warmth in this accursed land, It serveth a feast most delightful, A meal fit for the Ashen One."
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