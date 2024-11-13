const Banner = () => {
    return (
        <>
            <div className="font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
                <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
                    <div className="max-md:order-1 max-md:text-center">
                        <p className="mt-4 text-sm font-bold text-blue-600">
                            <span className="rotate-90 inline-block mr-2 mb-2">
                                |
                            </span>{" "}
                            Hubungi kami
                        </p>
                        <h2 className="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">
                            Tentukan jadwal Meeting bersama kami
                        </h2>
                        <p className="mt-5 text-base text-black leading-relaxed">
                            PT. Sarana Karya Industri (SKI) siap untuk membantu
                            kebutuhan industri Anda. Hubungi kami untuk
                            membangun project lebih lanjut.
                        </p>
                    </div>
                    <div className="md:h-[400px] p-2">
                        <img
                            src="https://imgur.com/CxkAYmF.png"
                            className="w-full h-full object-contain rounded-lg"
                            alt="Dining Experience"
                        />
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-4 items-center">
                    <a
                        href="mailto:skaryaindustri@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://i.ibb.co.com/D1Q58B6/Gmail-Logo-512px.png"
                            className="w-28 mx-auto"
                            alt="gmail-logo"
                        />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=+6281510519018&text=Halo PT. Sarana Karya Industri, Kami tertarik dengan produk anda. Kami ingin berdiskusi lebih lanjut. Terima Kasih"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                            className="w-28 mx-auto"
                            alt="whatsapp-logo"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Banner;
