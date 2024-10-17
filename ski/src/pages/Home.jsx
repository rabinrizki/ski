import { Link } from "react-router-dom";
import Header from "../components/Header";

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
                        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
                            <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
                                PT. Sarana Karya Industri
                            </h1>
                            <p className="text-base">
                                IS a company that provides needs for industry
                                and retail, for goods in the form of Labels,
                                Ribbons, Barcode Printers, Postal Printers
                                (Point Of Sales Machines), Carton Boxes and
                                others.
                            </p>
                            <div
                                style={{
                                    marginRight: 500,
                                    marginBottom: "-235px",
                                }}
                                className="rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
                            >
                                <h1 className="md:text-4xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
                                    VISI
                                </h1>
                                <p className="text-base">
                                    Able to serve industrial and retail needs
                                    well and professionally, It is a means for
                                    industry and retail to help meet the needs
                                    of goods.
                                </p>
                            </div>
                            <div
                                style={{ marginBottom: "-20px" }}
                                className="rounded-xl px-6 py-8 space-y-6 max-w-md md:ml-auto w-full"
                            >
                                <h1 className="md:text-4xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
                                    MISI
                                </h1>
                                <p className="text-base">
                                    Professional in serving the needs of
                                    industry and reliable retail. Committed to
                                    providing customer satisfaction by
                                    maintaining quality.
                                </p>
                            </div>
                        </div>
                        <hr className="my-12 border-gray-300" />
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
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
                            <Link to={"/label"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 32 32"
                                    >
                                        <path
                                            d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Label Sticker
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/ribbon"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border">
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
                                            Ribbon
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/cartonbox"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 512.001 512.001"
                                    >
                                        <path
                                            d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Carton Box
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/innerbox"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                        >
                                            <path
                                                d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                                                data-original="#000000"
                                            />
                                            <path
                                                d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                                                data-original="#000000"
                                            />
                                        </g>
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Inner Box
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/scanner"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-12 h-12 mr-6 bg-blue-50 p-3 rounded-md shrink-0"
                                        viewBox="0 0 504.69 504.69"
                                    >
                                        <path
                                            d="M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z"
                                            data-original="#000000"
                                        />
                                        <path
                                            d="M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Scanner
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/thermal"}>
                                <div className="sm:p-6 p-4 flex bg-white rounded-md border">
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
                                            strokeMiterlimit={10}
                                            strokeWidth={30}
                                            clipPath="url(#a)"
                                            transform="matrix(1.33 0 0 -1.33 0 682.667)"
                                        >
                                            <path
                                                d="M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30"
                                                data-original="#000000"
                                            />
                                        </g>
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
                    <div className="mt-32">
                        <div className="sm:max-w-7xl max-w-sm mx-auto">
                            <div className="text-center">
                                <h2 className="md:text-4xl text-3xl font-extrabold">
                                    Our Clients
                                </h2>
                            </div>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-20 text-center mt-32">
                                <div>
                                    <a href="javascript:void(0)">
                                    <img
                                            src="https://i.ibb.co.com/x7kmBB6/PT-Dae-Hwa-Indonesia.jpg"
                                            alt="logo"
                                            className="w-52"
                                        />
                                         
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                    <img
                                            src="https://i.ibb.co.com/wwyJn57/1631354689523.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/k3m0Dpb/1638334868085.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/RhtyK4C/PT-ADITYA-MANDIRI-SEJAHTERA-GROUP-BOGORLOKER.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/VSqDbDx/logo-sanden.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                    <img
                                            src="https://i.ibb.co.com/QNjLMxt/images-2.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/5kvcKRH/logo-luwesgroup-1.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/WDM5Nz7/dharma.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/WWPXw3n/logo-client-kemindo-4.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/6Jy0CNn/images-3.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/LCdrLXx/Logo-Maesindo-pp-new.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/QbgMJJz/nusantara.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/5KQWd1s/restmb-idxmake-amp.jpg"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/8z4DrkK/toa.jpg"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/wwyJn57/1631354689523.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href="javascript:void(0)">
                                        <img
                                            src="https://i.ibb.co.com/cYxG3qb/images-5.png"
                                            alt="logo"
                                            className="w-52"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <div className="mb-16 text-center">
                            <h2 className="md:text-4xl text-3xl font-extrabold">
                                What our happy client say
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
                            <div className="bg-lime-500 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_2.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Mrs. Purwanti
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. Askara Internal
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        The service was amazing. I never had to
                                        wait that long for my food. The staff
                                        was friendly and attentive, and the
                                        delivery was impressively prompt.
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_3.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Mrs. Rini
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. Daesang Food Indonesia
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        The service was amazing. I never had to
                                        wait that long for my food. The staff
                                        was friendly and attentive, and the
                                        delivery was impressively prompt.
                                    </p>
                                </div>
                            </div>
                            <div className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-orange-500 relative max-md:shadow-md">
                                <div>
                                    {/* <img
                                        src="https://readymadeui.com/profile_4.webp"
                                        className="w-12 h-12 rounded-full"
                                    /> */}
                                    <h4 className="whitespace-nowrap font-semibold mt-2">
                                        Mrs. Sarah
                                    </h4>
                                    <p className="mt-1 text-xs">
                                        PT. TVS Motor Company Indonesia
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        The service was amazing. I never had to
                                        wait that long for my food. The staff
                                        was friendly and attentive, and the
                                        delivery was impressively prompt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white px-4 sm:px-10 py-12 mt-32">
                        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-semibold mb-6">
                                    About Us
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aenean gravida, mi eu
                                    pulvinar cursus, sem elit interdum mauris.
                                </p>
                                <div className="bg-[#f8f9ff] flex px-4 py-3 rounded-md text-left mt-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 192.904 192.904"
                                        width="16px"
                                        className="fill-gray-500 mr-3 rotate-90"
                                    >
                                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="Search..."
                                        className="w-full outline-none bg-transparent text-gray-600 text-[15px]"
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-6">
                                    Services
                                </h4>
                                <ul className="space-y-5">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Web Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Mobile App Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            UI/UX Design
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Digital Marketing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-6">
                                    Resources
                                </h4>
                                <ul className="space-y-5">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Webinars
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Ebooks
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Templates
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Tutorials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-6">
                                    About Us
                                </h4>
                                <ul className="space-y-5">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Our Story
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Mission and Values
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="my-8" />
                        <p className="text-center">
                            Copyright © 2023
                            <a
                                href="https://readymadeui.com/"
                                target="_blank"
                                className="hover:underline mx-1"
                            >
                                ReadymadeUI
                            </a>
                            All Rights Reserved.
                        </p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Home;
