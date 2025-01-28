import { Button } from "../../../components/button"
import {ComponentHeaderOne} from "../../../components/ComponentHeader"
import { legalServices } from "../../../data/data"

const Services = () => {
  return (
    <div className="space-y-5">

        <ComponentHeaderOne
        title="A wide range of legal services"
        label="Services"
        buttonText="View all services"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 text-center gap-3 w-full">
            {legalServices.map(({title, description, buttonText, Icon, iconColor}, index) => (
                <div key={index} className="flex flex-col gap-3  border border-gray-100 shadow-sm rounded-lg p-5 w-full">
                    <div className="flex items-center gap-3">
                        <Button
                        size={"sm"}
                        className={`${iconColor} cursor-auto`}
                        >
                            <Icon size={18} />
                        </Button>
                        <div className="flex flex-col text-start">
                            <h2>{title}</h2>
                            <p className="text-text-color text-xs">
                                {description}
                            </p>

                        </div>
                    </div>
                    <Button size={"lg"} disabled={buttonText === "Soon"} className="w-full">
                        {buttonText === "Soon"? buttonText : <span className="flex gap-2 items-center"><Icon /> {buttonText}</span> }
                    </Button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services