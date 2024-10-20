const Footer = () => {
    return (
        <>
        <footer className="py-4 px-4 sm:px-10 z-50 min-h-[70px] bg-slate-50 shadow-md">
            
                            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
                            <div className="lg:col-span-2">
                                <h4 className="text-xl font-semibold mb-6">
                                    Address
                                </h4>
                                <ul className="space-y-5">
                                    <li>
                                        <a
                                            href="https://maps.app.goo.gl/qPYnt2PJJgdnja6t9"
                                            className="hover:text-blue-600"
                                        >
                                            Jl. Bambu Hitam No.69, RT.8/RW.4,
                                            Cipayung, Kec. Cipayung, Kota
                                            Jakarta Timur, Daerah Khusus Ibukota
                                            Jakarta 13890
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold mb-6">
                                    Contact Us
                                </h4>
                                <ul className="space-y-5">
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            <img
                                                src="https://i.ibb.co.com/gd3Qjrx/gmail-mail-icon-for-web-design-free-png.webp"
                                                alt="WhatsApp"
                                                className="inline-block w-5 h-5"
                                            />{" "}
                                            <a href="mailto:skaryaindustri@gmail.com">
                                                skaryaindustri@gmail.com
                                            </a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://i.ibb.co.com/8g4Npm6/116-1160848-telephone-png-hd-samsung-phone-app-icon-transparent.png"
                                                alt="WhatsApp"
                                                className="inline-block w-5 h-5"
                                            />{" "}
                                            021-8459-1460
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="javascript:void(0)"
                                            className="hover:text-blue-600"
                                        >
                                            <img
                                                src="https://i.ibb.co.com/7GsBCDp/png-transparent-whats-app-logo-whatsapp-facebook-instant-messaging-icon-whatsapp-logo-text-logo-gras.png"
                                                alt="WhatsApp"
                                                className="inline-block w-5 h-5"
                                            />{" "}
                                            <a href="https://api.whatsapp.com/send?phone=+6281510519018&text=Halo PT. Sarana Karya Industri, Kami tertarik dengan produk anda. Kami ingin berdiskusi lebih lanjut. Terima Kasih">
                                                0815-1051-9018
                                            </a>
                                        </a>
                                        {/* <div
                                            style={{
                                                position: "fixed",
                                                left: 20,
                                                bottom: 20,
                                                zIndex: 1000,
                                            }}
                                        >
                                            <a
                                                href="https://api.whatsapp.com/send?phone=+6281510519018&text=Halo PT. Sarana Karya Industri, Kami tertarik dengan produk anda. Kami ingin berdiskusi lebih lanjut. Terima Kasih"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <button
                                                    style={{
                                                        background: "#25D366",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        padding: "10px 15px",
                                                        border: "none",
                                                        borderRadius: 5,
                                                        cursor: "pointer",
                                                        boxShadow:
                                                            "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                        transition:
                                                            "background 0.3s",
                                                    }}
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget.style.background =
                                                            "#1DAF5B")
                                                    }
                                                    onMouseLeave={(e) =>
                                                        (e.currentTarget.style.background =
                                                            "#25D366")
                                                    }
                                                >
                                                    <img
                                                        src="https://i.ibb.co.com/3RP8Lbn/download-and-use-logo-whatsapp-png-clipart-3.png"
                                                        alt="WhatsApp"
                                                        style={{
                                                            width: 24,
                                                            height: 24,
                                                            marginRight: 8,
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            color: "#fff",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        WhatsApp Kami
                                                    </span>
                                                </button>
                                            </a>
                                        </div> */}
                                    </li>
                                </ul>
                            </div>
                            {/* <div>
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
                                </ul>
                            </div> */}
                        </div>
                        <hr className="my-8 border-b-1 border-black" />

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
        </>
    )
}

export default Footer