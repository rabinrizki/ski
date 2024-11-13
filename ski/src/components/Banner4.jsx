const Banner4 = () => {
    return (
        <>
            <div className="bg-white w-full font-[sans-serif]">
                <div className="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
                    <div className="relative w-full h-full md:min-h-[470px]">
                        <img
                            src="https://i.ibb.co.com/TvV3L6V/pexels-tiger-lily-4483610.jpg"
                            className="w-full h-full object-cover shrink-0"
                        />
                    </div>
                    <div className="p-6 max-w-xl mx-auto">
                        <h1 className="sm:text-4xl text-2xl font-extrabold text-orange-500">
                            VISI
                        </h1>
                        <div className="mt-6">
                            <p className="text-xl text-black">
                                Dapat melayani kebutuhan industri & retail
                                dengan baik dan profesional. SKI adalah sarana
                                bagi industri & retail guna membantu memenuhi
                                kebutuhan barang-barangnya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner4;
