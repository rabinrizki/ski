import Footer from "../components/Footer"
import Header from "../components/Header"
import Whatsapp from "../components/Whatsapp"

const Ribbon = () => {
    return (
        <>
        <Header/>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">
                <h2 className="text-4xl text-center font-extrabold text-gray-800 mt-12 mb-12">
                    Ribbon
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/fr3BSXy/IMG-3774.jpg"
                                alt="Product 1"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Wax Resin
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-md overflow-hidden cursor-pointer">
                        <div className="w-full overflow-hidden">
                            <img
                                src="https://i.ibb.co.com/qyTM0JC/IMG-3775.jpg"
                                alt="Product 2"
                                className="h-full w-full object-cover object-top hover:scale-110 transition-all"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                                <h3 className="text-lg font-bold text-white">
                                    Resin
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Whatsapp/>
            </div>
            <Footer/>
        </>
    )
}

export default Ribbon