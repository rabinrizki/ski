import { Link } from "react-router-dom";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            {/* google font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin=""
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n    body {\n      font-family: Poppins, sans-serif;\n    }\n  ",
                }}
            />
            <div className="bg-[#f8f9ff] text-black text-[15px]">
                <Header />
                <div className="relative">
                    <div className="px-4 sm:px-10">
                        <div className="flex justify-center items-center flex-col">
                            <a href="javascript:void(0)">
                                <img
                                    src="https://imgur.com/CxkAYmF.png"
                                    alt="logo"
                                    className="w-auto"
                                />
                            </a>
                        </div>

                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            {/* <h1 className="md:text-6xl text-4xl font-extrabold mb-3 md:!leading-[75px]">
                                SKI
                            </h1>
                            <p className="text-base">
                                ADALAH PERUSAHAAN yang menyediakan kebutuhan
                                untuk industri & retail untuk barang-barang
                                berupa label, ribbon, printer barcode, printer
                                pos (mesin point of sales), karton box dan
                                lainnya.
                            </p> */}
                            <div className="rounded-lg  bg-gradient-to-r from-green-300 to-lime-500 shadow-md p-6 text-black">
                                <h1 className="md:text-6xl text-4xl font-extrabold mb-3 md:!leading-[75px]">
                                    SKI
                                </h1>
                                <p className="text-base">
                                    ADALAH PERUSAHAAN yang menyediakan kebutuhan
                                    untuk industri & retail untuk barang-barang
                                    berupa label, ribbon, printer barcode,
                                    printer pos (mesin point of sales), karton
                                    box dan lainnya.
                                </p>
                            </div>
                            <br />
                            {/* <h4 className="md:text-4xl text-4xl font-semibold md:!leading-[75px]">
                                VISI
                            </h4>
                            <p className="text-base">
                                Dapat melayani kebutuhan industri & retail
                                dengan baik dan profesional. SKI adalah sarana
                                bagi industri & retail guna membantu memenuhi
                                kebutuhan barang-barangnya.
                            </p> */}
                            <div className="rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 shadow-md p-6 text-black">
                                <h4 className="md:text-4xl text-4xl font-semibold md:!leading-[75px]">
                                    VISI
                                </h4>
                                <p className="text-base">
                                    Dapat melayani kebutuhan industri & retail
                                    dengan baik dan profesional. SKI adalah
                                    sarana bagi industri & retail guna membantu
                                    memenuhi kebutuhan barang-barangnya.
                                </p>
                            </div>
                            <br />
                            {/* <h4 className="md:text-4xl text-4xl font-semibold md:!leading-[75px]">
                                MISI
                            </h4>
                            <p className="text-base">
                                Profesional dalam melayani kebutuhan untuk
                                industri & retail yang dapat diandalkan.
                                Berkomitmen memberikan kepuasan pelanggan dengan
                                menjaga kualitas.
                            </p> */}
                            <div className="rounded-lg bg-gradient-to-r from-orange-300 to-orange-500 shadow-md p-6 text-black">
                                <h4 className="md:text-4xl text-4xl font-semibold md:!leading-[75px]">
                                    MISI
                                </h4>
                                <p className="text-base">
                                    Profesional dalam melayani kebutuhan untuk
                                    industri & retail yang dapat diandalkan.
                                    Berkomitmen memberikan kepuasan pelanggan
                                    dengan menjaga kualitas.
                                </p>
                            </div>
                        </div>
                        <hr className="my-12 mt-32 border-gray-300" />
                    </div>
                    {/* <img src="https://imgur.com/CxkAYmF.png class="absolute inset-0 w-full h-full" /> */}
                </div>
                <div className="px-4 sm:px-10">
                    <div className="mt-32 max-w-7xl mx-auto">
                        <div className="mb-16 max-w-2xl text-center mx-auto">
                            <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
                                Our Products
                            </h2>
                        </div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
                            <Link to={"/label"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 682.667 682.667"
                                    >
                                        <defs>
                                            <clipPath
                                                id="a"
                                                clipPathUnits="userSpaceOnUse"
                                            >
                                                <path
                                                    d="M0 512h512V0H0Z"
                                                    data-original="#000000"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                            strokeWidth={40}
                                            clipPath="url(#a)"
                                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                        >
                                            <path
                                                d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="M178 271.894 233.894 216 334 316.105"
                                                data-original="#000000"
                                            />
                                        </g>
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Label Sticker
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/labelnonsticker"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 682.667 682.667"
                                    >
                                        <defs>
                                            <clipPath
                                                id="a"
                                                clipPathUnits="userSpaceOnUse"
                                            >
                                                <path
                                                    d="M0 512h512V0H0Z"
                                                    data-original="#000000"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeMiterlimit={10}
                                            strokeWidth={40}
                                            clipPath="url(#a)"
                                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                        >
                                            <path
                                                d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="M178 271.894 233.894 216 334 316.105"
                                                data-original="#000000"
                                            />
                                        </g>
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Label Non Sticker
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/ribbon"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            d="M16 1c-4.25 0-7.5 3.4-7.5 7.5 0 3.05 1.75 5.8 4.35 7.1-0.9 0.9-1.85 1.95-2.35 3.15C9.5 20.2 12.05 25.5 16 30.5c3.95-5 6.5-10.3 5.5-12.5-0.5-1.2-1.45-2.25-2.35-3.15C24.25 14.3 26 11.55 26 8.5 26 4.4 22.75 1 16 1zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                            fill="#000"
                                        />
                                    </svg>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Ribbon
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/cartonbox"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 64 64"
                                    >
                                        <rect
                                            x="8"
                                            y="16"
                                            width="48"
                                            height="40"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                        <polygon
                                            points="8,16 32,0 56,16"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="8"
                                            y1="16"
                                            x2="56"
                                            y2="16"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="8"
                                            y1="56"
                                            x2="56"
                                            y2="56"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="8"
                                            y1="16"
                                            x2="8"
                                            y2="56"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                        <line
                                            x1="56"
                                            y1="16"
                                            x2="56"
                                            y2="56"
                                            stroke="#000"
                                            strokeWidth="2"
                                        />
                                    </svg>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            CartonBox & InnerBox
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/scanner"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M464 128H352V64H160v64H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h32v32c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-32h32c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM160 32h192v32H160V32zm288 384H64V192h384v224zm-96 32H128v-32h224v32z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Printer & Scanner
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/thermal"}>
                                <div className="sm:p-6 p-4 flex bg-gradient-to-r from-green-300 to-lime-500 rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 682.667 682.667"
                                    >
                                        <path d="M170 0h512c26.5 0 48 21.5 48 48v576c0 26.5-21.5 48-48 48H170c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zm0 60v576h512V60H170zm30 60h30v30h-30V120zm0 120h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480zm90-240h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480zm90-240h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480z" />
                                    </svg>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Thermal Paper
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr className="my-12 mt-32 border-gray-300" />
                    <div className="mt-32">
                        <div className="sm:max-w-7xl max-w-sm mx-auto">
                            <div className="text-center">
                                <h2 className="md:text-4xl text-3xl font-extrabold">
                                    Our Clients
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-20 text-center mt-32 justify-items-center">
                                <div className="flex items-start justify-center">
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/x7kmBB6/PT-Dae-Hwa-Indonesia.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/wwyJn57/1631354689523.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/k3m0Dpb/1638334868085.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/RhtyK4C/PT-ADITYA-MANDIRI-SEJAHTERA-GROUP-BOGORLOKER.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/VSqDbDx/logo-sanden.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/QNjLMxt/images-2.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/5kvcKRH/logo-luwesgroup-1.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/WDM5Nz7/dharma.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/WWPXw3n/logo-client-kemindo-4.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/6Jy0CNn/images-3.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/LCdrLXx/Logo-Maesindo-pp-new.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/QbgMJJz/nusantara.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/5KQWd1s/restmb-idxmake-amp.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/8z4DrkK/toa.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/wwyJn57/1631354689523.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/cYxG3qb/images-5.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <div className="sm:max-w-7xl max-w-sm mx-auto">
                            <div className="text-center">
                                <h2 className="md:text-4xl text-3xl font-extrabold">
                                    In Partnership With
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-20 text-center mt-32 justify-items-center">
                                <div className="flex items-start justify-center">
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/gJtRv29/images.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/sbq2xdf/images-6.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/936JGdv/idataglobal-logo.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/R0wdJpj/content04.png"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/85MNM6q/1662447681879.jpg"
                                            alt="logo"
                                            className="w-52 h-32 object-contain"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <div className="mb-16 text-center">
                            <h2 className="md:text-4xl text-3xl font-extrabold">
                                What Our Happy Client Say
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
                            <div className="bg-gradient-to-r from-green-300 to-lime-300 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-gradient-to-r from-orange-400 to-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_2.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Ibu Purwanti
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. Askara Internal
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        Layanannya luar biasa bagus. Pengiriman
                                        cepat, kualitas tinggi.
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-gradient-to-r from-orange-400 to-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_3.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Ibu Rini
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. Daesang Food Indonesia
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        Semua staff ramah, sopan. Selalu
                                        mengerti apa yang diinginkan
                                        customernya.
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-gradient-to-r from-orange-400 to-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_4.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Ibu Sarah
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. TVS Motor Company Indonesia
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        Produk yang selalu terjamin kualitasnya,
                                        menjadi partner yang baik untuk
                                        berbisnis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Whatsapp/>
                    <Footer/>
            </div>
        </>
    );
};

export default Home;
