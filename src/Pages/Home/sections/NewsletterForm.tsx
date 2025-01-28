import { MdOutlineMailOutline } from "react-icons/md"
import { Button } from "../../../components/button"

const NewsletterForm = () => {

    return (
        <div className="py-12 lg:py-20 container-style">
        <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row gap-6 lg:gap-8">
            
          <div className="flex flex-col gap-2 w-full lg:w-auto text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl text-primary-color font-bold">Newsletter</h1>
            <p className="text-sm lg:text-base text-text-color w-full lg:w-[90%]">
              Stay up to date with the latest legal developments and practical advice from Qatar's leading lawyers by
              subscribing to the newsletter
            </p>
          </div>
  
          <div className="w-full lg:w-[60%] xl:w-[50%]">
            <div className="flex items-center w-full p-2 rounded-full bg-white border border-gray-200">
              <div className="flex items-center flex-grow px-3">
                <MdOutlineMailOutline className="text-gray-500 min-w-[20px] mr-2" />
                <input type="email" className="w-full outline-none text-base" placeholder="Enter your email" />
              </div>
              <Button className="rounded-full px-6 py-2 font-bold whitespace-nowrap text-sm">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default NewsletterForm