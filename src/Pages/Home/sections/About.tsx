import { useState } from "react"
import { faqItems } from "../../../data/data"
import { ComponentHeaderTwo } from "../../../components/ComponentHeader"
import { FaArrowDown, FaArrowUpLong } from "react-icons/fa6"
import { Button } from "../../../components/button"
import WhyChooseUs from "./WhyChooseUs"
import NewsletterForm from "./NewsletterForm"

const About = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
   

    return (
        <>
            <div className="space-y-5 container-style py-20">
                <ComponentHeaderTwo
                title="Frequently Asked Questions"
                label="FAQ"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faqItems.map((item, index) => (
                        <div className="">
                            <Button
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="py-4 text-left flex justify-between items-center w-full overflow-hidden"
                            aria-expanded={openIndex === index}
                            variant={"outline"}
                            >
                                <span className="font-medium text-sm overflow-hidden">{item.question}</span>
                                {openIndex === index ? <FaArrowUpLong  className=" text-secondary-color" /> : 
                                <FaArrowDown className=" text-secondary-color" />}
                            </Button>
                            <div
                            id={`faq-answer-${index}`}
                            role="region"
                            className={`overflow-hidden transition-all duration-200 w-full ${
                            openIndex === index ? "max-h-48 p-2" : "max-h-0"
                            }`}
                            >
                                <p className="pb-4 text-sm text-text-color">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <WhyChooseUs/>

            <NewsletterForm/>

        </>
    )
}

export default About