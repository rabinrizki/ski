const Banner5 = () => {
    return (
        <>
            <div className="bg-gray-800 -100 w-full font-[sans-serif]">
                <div className="grid md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden">
                    <div className="relative w-full h-full md:min-h-[470px]">
                        <img
                            src="https://i.ibb.co.com/r4s15TZ/pexels-david-lehoczki-197683126-11515346.jpg"
                            className="w-full h-full object-cover shrink-0"
                        />
                    </div>
                    <div className="p-6 max-w-xl mx-auto">
                        <h1 className="sm:text-4xl text-2xl font-extrabold text-orange-500">
                            MISI
                        </h1>
                        <div className="mt-6">
                            <p className="text-xl text-white">
                                Profesional dalam melayani kebutuhan untuk
                                industri & retail yang dapat diandalkan.
                                Berkomitmen memberikan kepuasan pelanggan dengan
                                menjaga kualitas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner5;
