import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "@inertiajs/inertia-react";


export default function About() {
    const [activeProduct, setActiveProduct] = useState(0);
    const onCarouselPrev = () => {
        setActiveProduct((prev) => (prev - 1 + Object.keys(product).length) % Object.keys(product).length);
    }
    const onCarouselNext = () => {
        setActiveProduct((prev) => (prev + 1) % Object.keys(product).length);
    }
    const product = {
        0: <EsLumut prev={onCarouselPrev} next={onCarouselNext}/>,
        1: <Dimsum prev={onCarouselPrev} next={onCarouselNext}/>,
        2: <MashedPotato prev={onCarouselPrev} next={onCarouselNext}/>,
    };
    return (
        <div className='h-screen bg-[#FFB42D] py-10 flex items-center' id='about'>
            <div className='w-6/12'>
                <div className='pl-20 w-10/12'>
                    {product[activeProduct]}
                </div>
            </div>
            <div className='w-6/12 px-7'>
                <div className='w-10/12 bg-[#FF2E2E] px-5 py-4 rounded-2xl'>
                    <p className='font-jua text-[#FFB42D] text-3xl'>
                        Nikmati setiap gigitan dan tegukan dengan cita rasa khas yang menggugah selera, dibuat dengan bahan pilihan untuk pengalaman kuliner yang tak terlupakan.
                    </p>
                </div>
            </div>
        </div>
    )
}

function EsLumut({prev, next}) {
    return (
        <div>
            <div className='flex items-center gap-5 relative'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-xl absolute -left-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={prev}/>
                <div className='bg-eslumut h-56 w-full rounded-2xl bg-cover bg-center mb-8'></div>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl absolute -right-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={next}/>
            </div>
            <h1 className='text-[#FF2E2E] font-jua text-3xl mb-1'>Es Lumut</h1>
            <p className='text-[#FF2E2E] font-jua text-lg mb-5'>
                Minuman segar dengan tekstur unik dan rasa manis yang pas, menghadirkan sensasi lembut dan menyegarkan di setiap tegukan.
            </p>
            <Link href="/" className='font-jua bg-[#FF2E2E] text-white px-4 py-3 rounded-lg'>
                BUY NOW
            </Link>
        </div>
    );
}
function Dimsum({prev, next}) {
    return (
        <div>
            <div className='flex items-center gap-5 relative'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-xl absolute -left-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={prev}/>
                <div className='bg-dimsum h-56 w-full rounded-2xl bg-cover bg-center mb-8'></div>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl absolute -right-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={next}/>
            </div>
            <h1 className='text-[#FF2E2E] font-jua text-3xl mb-1'>Dimsum</h1>
            <p className='text-[#FF2E2E] font-jua text-lg mb-5'>
                Dimsum lezat dengan isian gurih dan kulit yang lembut, dibuat dari bahan pilihan untuk menghadirkan cita rasa autentik di setiap gigitan.
            </p>
            <Link href="/" className='font-jua bg-[#FF2E2E] text-white px-4 py-3 rounded-lg'>
                BUY NOW
            </Link>
        </div>
    );
}
function MashedPotato({prev, next}) {
    return (
        <div>
            <div className='flex items-center gap-5 relative'>
                <FontAwesomeIcon icon={faArrowLeft} className='text-xl absolute -left-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={prev}/>
                <div className='bg-mashpotato h-56 w-full rounded-2xl bg-cover bg-center mb-8'></div>
                <FontAwesomeIcon icon={faArrowRight} className='text-xl absolute -right-10 hover:scale-125 active:scale-110 transition-all duration-200' onClick={next}/>
            </div>
            <h1 className='text-[#FF2E2E] font-jua text-3xl mb-1'>Mashed Potatoes</h1>
            <p className='text-[#FF2E2E] font-jua text-lg mb-5'>
                Mashed potato creamy dengan tekstur lembut dan rasa gurih, dibuat dari kentang pilihan untuk sensasi lezat di setiap suapan.
            </p>
            <Link href="/" className='font-jua bg-[#FF2E2E] text-white px-4 py-3 rounded-lg'>
                BUY NOW
            </Link>
        </div>
    );
}
