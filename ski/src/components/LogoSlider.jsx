import React, { useState, useEffect } from "react";

const LogoSlider = () => {
    const logos = [
        "https://i.ibb.co.com/gJtRv29/images.jpg",
        "https://i.ibb.co.com/sbq2xdf/images-6.png",
        "https://i.ibb.co.com/936JGdv/idataglobal-logo.jpg",
        "https://i.ibb.co.com/R0wdJpj/content04.png",
        "https://i.ibb.co.com/85MNM6q/1662447681879.jpg",
    ];

    // Tambahkan logo pertama ke akhir untuk efek looping
    const extendedLogos = [...logos, logos[0]];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % extendedLogos.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [extendedLogos.length]);

    return (
        <div className="mt-22 mb-32">
            <div className="sm:max-w-7xl max-w-sm mx-auto text-center">
                <div className="mb-16">
                    <h2 className="md:text-6xl text-4xl font-semibold mb-3 md:!leading-[75px]">
                        In Partnership
                    </h2>
                </div>
                <div className="bg-white p-5 rounded-lg shadow mb-20 overflow-hidden">
                    <div
                        className="flex transition-transform duration-100 ease-in-out"
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / extendedLogos.length)
                            }%)`,
                        }}
                    >
                        {extendedLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-full p-5"
                            >
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

export default LogoSlider;
