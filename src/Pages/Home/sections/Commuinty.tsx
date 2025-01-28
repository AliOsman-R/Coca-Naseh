import { ComponentHeaderOne } from "../../../components/ComponentHeader"
import { legalBlogs } from "../../../data/data"



const Commuinty = () => {
  return (
        <div className="container-style py-20">
            <div className="space-y-5">
                <ComponentHeaderOne
                title="Naseh Legal Blog"
                label="Community"
                buttonText="View all blogs"
                />

                <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 text-center gap-3 w-full">
                    {legalBlogs.map(({title, description, type, date, image}, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg flex flex-col justify-center gap-3 p-5">
                            <img src={image} alt=""  className="border border-gray-50  w-full rounded-lg"/>
                            <div className=" text-start text-secondary-color text-sm">
                                {date} | {type} 
                            </div>
                            <div className="flex flex-col justify-center text-start">
                                <h2 className=" font-bold text-primary-color">{title}</h2>
                                <p className="text-text-color text-xs">{description}</p>
                            </div>
                        </div>
                    ))}
                        
                </div>
            </div>
        </div>
  )
}

export default Commuinty