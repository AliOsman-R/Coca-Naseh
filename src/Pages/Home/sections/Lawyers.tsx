import { useCallback, useEffect, useState } from 'react'
import { lawyers } from '../../../data/data'
import { Button } from '../../../components/button'
import { RiMedalLine } from 'react-icons/ri'
import { FaLanguage } from 'react-icons/fa6'

const Lawyers = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [visibleCards, setVisibleCards] = useState<number>(4)
    
    const updateVisibleCards = useCallback(() => {
        if (window.innerWidth >= 1024) {
            setVisibleCards(4)
        } else if (window.innerWidth >= 768) {
            setVisibleCards(2)
        } else {
            setVisibleCards(1)
        }
    }, [])

    useEffect(() => {
        updateVisibleCards()
        window.addEventListener("resize", updateVisibleCards)
        return () => window.removeEventListener("resize", updateVisibleCards)
    }, [updateVisibleCards])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % lawyers.length)
        }, 5000) 

        return () => clearInterval(interval)
    }, [])
    
  return (
        <div className="mb-10">
            <div className="relative overflow-hidden">
                <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                >
                    {lawyers.map((lawyer) => (
                        <div key={lawyer.id} className={`w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2`}>
                            <div className="bg-white rounded-lg p-6 shadow-sm border h-full">
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="flex flex-col items-center border-b border-gray-200 ">
                                        <div className="w-24 h-24 p-3 rounded-ful border-[10px] border-gray-100 rounded-full mb-4 overflow-hidden">
                                            <img
                                            src={lawyer.image || "photo.svg"}
                                            alt={lawyer.name}
                                            className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-primary-color">{lawyer.name}</h3>
                                        <p className="text-text-color text-sm mb-3 flex-grow">{lawyer.description}</p>
                                    </div>

                                    <div className=" flex items-center justify-around gap-2 w-full mb-6 mt-3">
                                        <div className="flex items-center gap-2">
                                            <FaLanguage size={20} className="text-secondary-color" />
                                            <div className="flex flex-col text-xs text-start">
                                                <span className="text-text-color">Spoken Language</span>
                                                <span className="font-semibold">{lawyer.languages.join(" & ")}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-2">
                                            <RiMedalLine  size={20} className="text-secondary-color" />
                                            <div className="flex flex-col text-xs text-start">
                                                <span className="text-text-color">Years Of Experience</span>
                                                <span className="font-semibold">{lawyer.yearsExperience}</span>
                                            </div>
                                        </div>

                                    </div>

                                    <Button size={"lg"} className='w-full'>
                                        View Profile
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {lawyers.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`border-[3px] rounded-full p-1 transition-colors ${
                    i === currentIndex ? "border-secondary-color" : "bg-secondary-icon-color hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
                ))}
            </div>
        </div>
  )
}

export default Lawyers