import Footer from "../components/Footer";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";

const Scanner = () => {
    return (
        <>
            <Header />
            <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl text-center font-extrabold text-gray-800 mt-12 mb-12">
                    Printer & Scanner
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/xmCqYXp/xt5-40spnc.webp"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Printer Bixolon
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer">
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
                                    Printer Zebra
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/jL1TLwM/SCANNER.jpgn"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Scanner Zebra
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Whatsapp />
            </div>
            <Footer />
        </>
    );
};
export default Scanner;
