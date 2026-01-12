import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";


export default function Download() {
    const navigate = useNavigate();
    const [closing, setClosing] = useState(false);

    function handleClose() {
        setClosing(true);
        setTimeout(() => navigate(-1), 600)
    }

    return (
    <div className={`bg-[#7B011E] fixed inset-0 transition-opacity duration-700 ${closing ? "opacity-0" : "opacity-100"}`}>
        <button onClick={handleClose}>
            <X  size={30} className="absolute text-white right-5 top-10 md:right-16 md:scale-150 lg:right-20"/>
        </button>
        <div className="h-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 lg:px-40">
        <div className="w-full pt-2 pb-20 2xl:pb-0 2xl:pt-0 ">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Time to Manage Your Finances #LivingSmart</h1>
        <h3 className="text-base md:text-xl pt-4 lg:pt-6 text-white">Enjoy seamless financial management with CIMB Niaga, from saving and transactions to smart expense control all in one app.</h3>
        <h3 className="text-base md:text-xl pt-4 lg:pt-6 text-white">Open savings and deposits online in minutes, enjoy competitive interest rates, selected fee-free services, and easy digital transfers and payments anytime, anywhere.</h3>
        <div className="grid grid-cols-1 md:flex items-center pt-4 lg:pt-6 gap-2">
            <h3 className="text-base md:text-xl text-white">Download CIMB NIAGA : </h3>
            <div className="flex gap-2">
            <img src="src/assets/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="" className="h-10 w-auto" />
            <img src="src/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="" className="h-10 w-auto" />
            </div>
        </div>
        <h3 className="text-base md:text-xl pt-4 lg:pt-6 text-white">Grab your smartphone, scan the QR code below, or click the download button to start your financial journey with CIMB Niaga.</h3>
        
        <div className="pt-8 inline-block rounded-lg shadow-md">
        <QRCodeSVG
        value="https://www.cimbniaga.co.id/id/personal/digital-banking/aplikasi-octo"
        size={200}
        />
    </div>
        </div>

        <div className="hidden lg:block">
            <img src="src/assets/icon-octo.png" alt="" className="w-200" />
        </div>
        </div>
    </div>
    );
}
