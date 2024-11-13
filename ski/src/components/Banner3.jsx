const Banner3 = () => {
    return (
        <>
            <div className="bg-gray-800 w-full font-[sans-serif]">
                <div className="grid md:grid-cols-2 gap-4 items-center overflow-hidden">
                    <div className="relative w-full h-full md:min-h-[470px]">
                        <img
                            src="https://i.ibb.co.com/S3nphqC/IQC-OQC-5-R-3-page-0001-1.jpg"
                            className="w-full h-full object-cover shrink-0"
                        />
                    </div>
                    <div className="p-6 max-w-xl mx-auto">
                        <h1 className="sm:text-4xl text-2xl font-extrabold text-orange-500">
                            PT. Sarana Karya Indusri (SKI)
                        </h1>
                        <div className="mt-6">
                            <h1 className="text-xl  text-white">
                                ADALAH PERUSAHAAN yang menyediakan kebutuhan
                                untuk industri & retail untuk barang-barang
                                berupa Label Barcode & Label Kemasan, Ribbon,
                                Printer Barcode, Scanner, POS (Point of
                                Sales/Mesin Kasir), Karton Box, Inner Box dan
                                barang pendukung untuk kebutuhan Industri
                                lainnya. lainnya.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner3;
