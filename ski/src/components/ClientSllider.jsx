import React, { useState, useEffect } from "react";

const ClientSlider = () => {
    const logos = [
        "https://i.ibb.co.com/gJtRv29/images.jpg",
        "https://i.ibb.co.com/wwyJn57/1631354689523.png",
        "https://i.ibb.co.com/x7kmBB6/PT-Dae-Hwa-Indonesia.jpg",
        "https://i.ibb.co.com/RhtyK4C/PT-ADITYA-MANDIRI-SEJAHTERA-GROUP-BOGORLOKER.png",
        "https://i.ibb.co.com/VSqDbDx/logo-sanden.png",
        "https://i.ibb.co.com/QNjLMxt/images-2.png",
        "https://i.ibb.co.com/5kvcKRH/logo-luwesgroup-1.png",
        "https://i.ibb.co.com/WDM5Nz7/dharma.png",
        "https://i.ibb.co.com/WWPXw3n/logo-client-kemindo-4.png",
        "https://i.ibb.co.com/6Jy0CNn/images-3.png",
        "https://i.ibb.co.com/LCdrLXx/Logo-Maesindo-pp-new.png",
        "https://i.ibb.co.com/QbgMJJz/nusantara.png",
        "https://i.ibb.co.com/5KQWd1s/restmb-idxmake-amp.jpg",
        "https://i.ibb.co.com/8z4DrkK/toa.jpg",
        "https://i.ibb.co.com/cYxG3qb/images-5.png",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [logos.length]);

    return (
        <div className="mt-22 overflow-hidden">
            <div className="sm:max-w-7xl max-w-sm mx-auto">
                <div className="mb-16 max-w-2xl text-center font-semibold mx-auto">
                    <h2 className="md:text-6xl text-4xl font-extrabold mb-3 text-black md:!leading-[75px]">
                        Our Clients
                    </h2>
                </div>
                <div className="bg-white p-5 rounded-lg shadow mb-20 overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / logos.length)
                            }%)`,
                        }}
                    >
                        {logos.map((logo, index) => (
                            <div key={index} className="min-w-[200px] p-5">
                                <a href="javascript:void(0)">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="w-52 h-32 object-contain"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSlider;
