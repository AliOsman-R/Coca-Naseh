import { FaArrowRightLong } from "react-icons/fa6";
import { ComponentHeaderOneProps, ComponentHeaderTwoProps } from "../types/type";
import { Button } from "./button";

export const ComponentHeaderOne = ({label, title, buttonText} : ComponentHeaderOneProps) => {
    return (
        <div className="flex items-center justify-between max-md:flex-col gap-2">
            <div className="flex flex-col max-md:flex-row max-md:items-center gap-2 justify-center">
                <label className="text-secondary-color text-sm">{label}</label>
                <h1 className="text-4xl font-bold text-primary-color max-lg:text-2xl">{title}</h1>
            </div>
            <Button variant={"link"} className="flex items-center justify-center text-secondary-color">
                {buttonText} 
                <span className="size-10 rounded-full bg-secondary-icon-color flex items-center justify-center ">
                    <FaArrowRightLong /> 
                </span>
            </Button>
        </div>
    )
}


export const ComponentHeaderTwo = ({label, title} : ComponentHeaderTwoProps) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col tems-center justify-center text-center gap-2">
                <label className="text-secondary-color text-sm">{label}</label>
                <h1 className="text-4xl font-bold text-primary-color max-lg:text-2xl">{title}</h1>
            </div>
        </div>
    )
}
