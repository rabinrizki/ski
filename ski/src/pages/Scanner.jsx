import Header from "../components/Header"

const Scanner = () => {
    return (
        <>
        <Header/>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">
                   Printer & Scanner
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-500 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/1JS4Srs/img9213-1621470066.jpg"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Zebra Printer
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-500 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/G7bwQ2N/314325-2de82020-12f4-4c96-90ac-9cc503cd2b12-500-500.jpg"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Zebra Scanner
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-500 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/Tm3QNqD/65a01d47caa7441efe696837-xt3-40-1.webp"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Bixolon Printer
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Scanner