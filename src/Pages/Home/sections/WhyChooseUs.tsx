import legalBlog from "../../../assets/legalBlog1.png"
import qatarFlag from "../../../assets/qatar-flag.jpg"
import apple from "../../../assets/apple.png"
import googlePlay from "../../../assets/googlePlay.png"
import { features } from "../../../data/data"
const appleGoogleStyle = "flex bg-[#141414] items-center justify-center rounded-lg px-2 py-2 border border-[#393939] w-[150px] max-sm:w-[130px] hover:bg-[#141414]/80"
const WhyChooseUs = () => {

    return (
        <div>
            <div className="relative h-[400px]">
                <div className="relative z-10 flex justify-center items-center text-white">
                    <div className="flex flex-col container-style lg:flex-row justify-between items-start lg:items-center py-20 gap-8">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold text-white mb-4 max-sm:text-2xl">Why choose "?</h2>
                            <p className="text-text-color text-sm w-[55%] max-sm:w-full">
                            naseh application is the ideal solution for your legal consultations in qatar, as we provide innovative
                            legal services to meet your needs in a flexible and reliable manner.
                            </p>
                        </div>

                        <div className="flex gap-4 max-sm text-center">
                            {/* Google Play Button */}
                            <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className={appleGoogleStyle}
                            >
                                <img src={googlePlay} alt="Google Play" className="w-6 h-6 mr-3" />
                                <div>
                                    <div className="text-xs text-text-color">Available on</div>
                                    <div className="text-sm font-semibold max-sm:text-xs">Google Play</div>
                                </div>
                            </a>

                            {/* App Store Button */}
                            <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className={appleGoogleStyle}
                            >
                                <img src={apple} alt="App Store" className="w-6 h-6 mr-3" />
                                <div className="">
                                    <div className="text-xs text-text-color">Available on</div>
                                    <div className="text-sm font-semibold max-sm:text-xs">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                

                <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${legalBlog || "photo.svg"})` }}
                role="img"
                aria-label="Background image"
                ></div>
                
                <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: `url(${qatarFlag || "photo.svg"})` }}
                role="img"
                aria-label="Background image"
                ></div>

                <div className="absolute inset-0 opacity-90 bg-primary-color "/>

            </div>

            <div className="relative z-20 container-style -mt-20 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className={`flex flex-col justify-between h-full ${index === 1 ? "" : "flex-col-reverse"} items-center`}>
                                    <div className="w-full max-w-[300px] mb-4">
                                        <img
                                        src={feature.image || "photo.svg"}
                                        alt="Feature screenshot"
                                        className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-start">
                                        <h3 className="text-xl font-bold text-primary-color">{feature.title}</h3>
                                        <p className="text-text-color text-sm">{feature.description}</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default WhyChooseUs