import Footer from "../components/Footer";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";

const Labelnonsticker = () => {
    return (
        <>
            <Header />
            <div className="font-[sans-serif] p-4 mx-auto lg:max-w-md sm:max-w-md max-w-md">
                <h2 className="text-3xl text-center font-extrabold text-gray-800 mt-8 mb-8">
                    Point of Sales
                </h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
                        <div className="bg-gray-800  rounded-md overflow-hidden cursor-pointer">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://i.ibb.co.com/g6fHRcf/POS.jpg"
                                    alt="Product 2"
                                    className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                                />
                            </div>
                            <div className="p-6">
                                <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                    <h3 className="text-lg font-bold text-white">
                                        POS (Point of Sales)
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Whatsapp />
            <Footer />
        </>
    );
};

export default Labelnonsticker;
