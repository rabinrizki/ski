import Header from "../components/Header"

const Thermal = () => {
    return (
        <>
        <Header/>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">
                    Thermal Paper
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product1.webp"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Lexicon Luxe
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $10
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product2.webp"
                                alt="Product 2"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Adjective Attire
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $12
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product3.webp"
                                alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    ThreadCraft Vibes
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $14
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product7.webp"
                                alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Verbal Vogue Tees
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $12
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product5.webp"
                                alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Jargon Jungle
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $15
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://readymadeui.com/images/product6.webp"
                                alt="Product 3"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-gray-800">
                                    Syllable Streetwear
                                </h3>
                                <p className="text-lg text-blue-600 font-bold">
                                    $14
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thermal