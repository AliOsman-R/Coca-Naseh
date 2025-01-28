
import NavLinks from "./NavLinks"

const Navbar = () => {

    return (
        <div className="flex flex-col md:flex-row items-center w-full max-md:gap-10 md:gap-5 lg:gap-10 ">
           <NavLinks/>
        </div>
    )
}

export default Navbar;