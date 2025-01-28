import { FaPhoneVolume } from "react-icons/fa6"
import qatarFlag  from "../../../assets/qatar-flag.jpg"
import { Button } from "../../../components/button"
import { MdOutlinePhonelinkRing } from "react-icons/md"
import { legalFeatures, selectingList } from "../../../data/data"
import { BiCalendar } from "react-icons/bi"

const Hero = () => {

    return (
        <>
            {/* Hero Container */}
            <div className="relative w-full h-[560px]">
                <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${qatarFlag || "/placeholder.svg"})` }}
                role="img"
                aria-label="Qatar Flag"
                ></div>

                <div className="absolute inset-0 opacity-90 bg-primary-color"/>

                {/* Hero content */}
                <div className="relative z-10 container-style text-white">
                    <div className="home-header-style">
                        <div className="flex items-center gap-5">
                            <span className="bg-[#243655] rounded-lg p-5 max-lg:p-3">
                                <FaPhoneVolume />
                            </span>
                            <div className="flex flex-col justify-center gap-2">
                                <h2 className="font-bold text-2xl max-lg:text-base">Urgent consultation now!</h2>
                                <p className="text-text-color text-sm max-lg:text-[8px]">
                                    Book it in minutes, a lawyer will respond to you in a few minutes.
                                </p>
                            </div>
                        </div>
                        <Button 
                        size={"lg"} 
                        className="bg-red-600 text-lg font-semibold hover:bg-red-600/90 max-lg:text-sm">
                            <MdOutlinePhonelinkRing /> Consult now
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-3 mt-36 max-lg:mt-20 text-center">
                        <h1 className="text-6xl font-bold max-md:text-3xl">Choose & filter & schedule</h1>
                        <p className="text-text-color text-sm text-center max-md:text-xs w-[70%]">
                            Easy access to your legal advice. Choose, sort, and clearly define the font that best fits your schedule.
                        </p>
                    </div>
                </div>
            </div>

            {/* Selection List - Positioned to overflow */}
            <div className="relative z-20 container-style -mt-24">
                <div className="flex flex-col gap-10 items-center bg-white rounded-md text-black p-5 shadow-lg">
                    <div className="grid xl:grid-cols-4 sm:grid-cols-2 justify-center text-center w-full gap-3 overflow-hidden">
                        {selectingList.map(({ list, Icon, name, label }, index) => (
                        <div
                            key={index}
                            className={`flex gap-2 ${index === selectingList.length - 1 ? "" : `max-sm:border-none border-r ${index===1?" max-lg:border-none":""}`}`}
                        >
                            <Button size={"icon"} className="bg-secondary-icon-color text-secondary-color cursor-auto">
                                <Icon size={18} />
                            </Button>
                            <div className="flex flex-col p-2">
                                <select className="outline-none rounded border-none">
                                    <option value="">{name}</option>
                                    {list?.map((item, index) => (
                                    <option key={index} className="font-semibold" value={item}>
                                        {item}
                                    </option>
                                    ))}
                                </select>
                                <span className="text-start pl-1 text-sm text-text-color">{label}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <Button size={"lg"} disabled={true}>
                        <BiCalendar /> Book a consultation
                    </Button>
                </div>
            </div>
  
            <div className="container-style py-20">
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 text-center gap-3">
                    {legalFeatures.map(({title, description, Icon}, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-3">
                            <Button size={"icon"} className="bg-[#edf7f5] text-green-500 cursor-auto hover:bg-[#edf7f5]">
                                <Icon/> 
                            </Button>
                            <h2 className=" font-bold">{title}</h2>
                            <p className="text-sm text-text-color">{description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero