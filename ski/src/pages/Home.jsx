import { Link } from "react-router-dom";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import ClientSlider from "../components/ClientSllider";
import Banner from "../components/Banner";
import Banner3 from "../components/Banner3";
import Banner5 from "../components/Banner5";
import Banner4 from "../components/Banner4";

const Home = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
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

            <Header />
            <Banner3 />
            <Banner4 />
            <Banner5 />
            <br />
            <br />
            <br />
            <br />
            <ClientSlider />
            <div className="bg-white text-black text-[15px]">
                <div className="relative bg-cover bg-center">
                    <div className="px-4 sm:px-10">
                        <div className="max-w-4xl mx-auto text-center relative z-10"></div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 max-w-2xl text-center font-semibold mx-auto">
                        <h2 className="md:text-6xl text-xl font-extrabold mb-3 md:!leading-[75px]">
                            Our Product
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
                        <Link to={"/label"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
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
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        Label Sticker
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/labelnonsticker"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M464 128H352V64H160v64H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h32v32c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-32h32c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM160 32h192v32H160V32zm288 384H64V192h384v224zm-96 32H128v-32h224v32z" />
                                </svg>
                                <div>
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        POS
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/ribbon"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border">
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
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        Ribbon
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/cartonbox"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border">
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
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        CartonBox & InnerBox
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/scanner"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M464 128H352V64H160v64H48c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h32v32c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-32h32c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48zM160 32h192v32H160V32zm288 384H64V192h384v224zm-96 32H128v-32h224v32z" />
                                </svg>
                                <div>
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        Printer & Scanner
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/thermal"}>
                            <div className="sm:p-6 p-4 flex bg-gray-800 rounded-md border">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                    viewBox="0 0 682.667 682.667"
                                >
                                    <path d="M170 0h512c26.5 0 48 21.5 48 48v576c0 26.5-21.5 48-48 48H170c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zm0 60v576h512V60H170zm30 60h30v30h-30V120zm0 120h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480zm90-240h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480zm90-240h30v30h-30V240zm0 120h30v30h-30V360zm0 120h30v30h-30V480z" />
                                </svg>

                                <div>
                                    <h3 className="text-xl text-white font-semibold mb-2">
                                        Thermal Paper
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <Banner />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                    className="relative py-20"
                    style={{
                        backgroundImage:
                            "url('https://i.ibb.co.com/W01Y57r/pexels-mandiri-abadi-396768996-14804699.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                    }}
                >
                    <div className="mt-22">
                        <div className="mb-16 text-center font-semibold">
                            <div className="mb-16 max-w-2xl text-center mx-auto">
                                <h2 className="md:text-6xl text-4xl text-white font-extrabold mb-3 md:!leading-[75px]">
                                    What Our Client Happy Say
                                </h2>
                            </div>
                        </div>
                        <div className="mt-6 font-[sans-serif]">
                            <div className="max-w-6xl mx-auto">
                                <div className="max-w-2xl mx-auto text-center">
                                    <p className="text-lg text-white text-bold mt-6 leading-relaxed">
                                        Datang dari hal yang besar, merasakan
                                        secara langsung, menerima hal-hal yang
                                        lebih baik. Tidak ada yang lebih baik
                                        daripada melakukan pekerjaan dengan
                                        sepenuh hati. Hal yang sah adalah
                                        melakukan pekerjaan dengan baik.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-md:justify-center mt-16">
                                    <div className="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative">
                                        <div className="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 fill-white"
                                                viewBox="0 0 475.082 475.081"
                                            >
                                                <path
                                                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <h5 className="text-sm font-extrabold">
                                                    {" "}
                                                    Ibu Purwanti
                                                </h5>
                                                <h4 className="text-sm font-extrabold">
                                                    {" "}
                                                    PT. Askara Internal
                                                </h4>
                                                <div className="flex space-x-1 mt-2">
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm leading-relaxed">
                                                Layanannya luar biasa bagus.
                                                Pengiriman cepat, kualitas
                                                tinggi.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative">
                                        <div className="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 fill-white"
                                                viewBox="0 0 475.082 475.081"
                                            >
                                                <path
                                                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <h5 className="text-sm font-extrabold">
                                                    {" "}
                                                    Ibu Rini
                                                </h5>
                                                <h4 className="text-sm font-extrabold">
                                                    {" "}
                                                    PT. Daesang Food Indonesia
                                                </h4>
                                                <div className="flex space-x-1 mt-2">
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm leading-relaxed">
                                                Semua staff ramah, sopan. Selalu
                                                mengerti apa yang diinginkan
                                                customernya.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="max-w-[350px] h-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] lg:p-8 p-4 rounded-md bg-white relative">
                                        <div className="bg-[#ff0000] flex items-center justify-center w-16 h-16 max-lg:w-14 max-lg:h-14 rounded-full absolute -top-5 -right-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 fill-white"
                                                viewBox="0 0 475.082 475.081"
                                            >
                                                <path
                                                    d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <h5 className="text-sm font-extrabold">
                                                    {" "}
                                                    Ibu Sarah
                                                </h5>
                                                <h4 className="text-sm font-extrabold">
                                                    {" "}
                                                    PT. TVS Motor Company
                                                    Indonesia
                                                </h4>
                                                <div className="flex space-x-1 mt-2">
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 fill-[#ff0000]"
                                                        viewBox="0 0 14 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-sm leading-relaxed">
                                                Produk yang selalu terjamin
                                                kualitasnya, menjadi partner
                                                yang baik untuk berbisnis.
                                            </p>
                                        </div>
                                        <Whatsapp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="mt-22 mb-32">
                    <div className="sm:max-w-7xl max-w-sm mx-auto">
                        <div className="text-center text-black font-semibold">
                            <div className="mb-16 max-w-2xl text-center font-semibold mx-auto">
                                <h2 className="md:text-6xl text-4xl font-extrabold mb-3 md:!leading-[75px]">
                                    In Partnership
                                </h2>
                            </div>
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
                <br />
            </div>
            <Footer />
        </>
    );
};

export default Home;
