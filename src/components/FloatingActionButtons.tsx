import { FaWhatsapp } from "react-icons/fa6"
import { FaHeadset } from "react-icons/fa"
import { Button } from "./button"

export default function FloatingActionButtons() {
    return (
        <div className="fixed left-4 bottom-4 flex flex-col gap-4 z-[10000]">
            {/* WhatsApp Button */}
            <a
                href="#"
                onClick={e => e.preventDefault()}
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c35e] transition-colors rounded-full p-4 shadow-lg cursor-pointer "
            >
                <FaWhatsapp className="text-white w-6 h-6" />
                <span className="sr-only">Contact us on WhatsApp</span>
            </a>

            {/* Customer Support Button */}
            <Button 
            size={"custom"}
            className="bg-[#0066FF] hover:bg-[#0052cc] transition-colors rounded-full p-4  shadow-lg relative "
            >
                <FaHeadset className="text-white w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
                <span className="sr-only">Contact customer support</span>
            </Button>
        </div>
    )
}

