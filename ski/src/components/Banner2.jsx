const Banner2 = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/PrrhTmW/vecteezy-panoramic-view-of-gas-turbine-electrical-power-plant-in-33334456.jpg')", // Ganti dengan URL gambar yang diinginkan
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">
                            Unlock Premium Features
                        </h2>
                        <p className="text-lg lg:text-xl text-white"></p>
                        <a
                            href="jacascrip:void(0);"
                            className="mt-12 bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-6 rounded-full text-lg lg:text-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block"
                        >
                            Upgrade Now
                        </a>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://imgur.com/CxkAYmF.png"
                            alt="Premium Benefits"
                            className="w-full mx-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner2;
