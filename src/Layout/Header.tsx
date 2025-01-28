import { BiMenu, BiX } from "react-icons/bi"
import Navbar from "../components/Navbar"
import { useState } from "react";
import { Button } from "../components/button";
import { IoPersonOutline } from "react-icons/io5";
import qatarFlag  from "../assets/qatar-flag.jpg"
const menuCloseBtnStyle = 'absolute transition-all duration-500 ease-out transform'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      };

    return (
        <div className="navbar-style">
            <div className="container-style md:px-0 lg:px-10 max-md:px-10 py-5">

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                    onClick={toggleMenu} 
                    className={`flex items-center relative`}
                    >
                        <span
                        className={`${menuCloseBtnStyle} ${
                        isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                        }`}
                        >
                            <BiMenu size={23} />
                        </span>
                        <span
                        className={` ${menuCloseBtnStyle} ${
                        isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        >
                            <BiX size={23} />
                        </span>
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="max-md:hidden flex justify-between items-center gap-10">
                   <NavbarWrapper/>
                </div>

                {/* Mobile menu */}
                <div className={`${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"} navbar-menu-style `}>
                    <NavbarWrapper/>
                </div>

            </div>

        </div>
    )
}

export default Header


const NavbarWrapper = () => {
    const [lang, setLang] = useState("en")

    return (
        <>
            <div className="flex items-center gap-2">
                <span className="bg-primary-color rounded-full text-white font-bold size-7 text-2xl flex items-center justify-center">
                    C
                </span>
                <h1 className=" text-2xl font-bold text-secondary-color ">coca</h1>
            </div>
            <div className="">
                <Navbar/>
            </div>
            <div className="flex items-center gap-2">
                <Button variant={"outline"} size={"sm"}>
                    <IoPersonOutline size={18} />
                </Button>
                <Button 
                onClick={()=> setLang(lang === 'en'? 'ar' : "en")} 
                variant={"outline"} 
                size={"sm"}
                className="flex gap-2"
                >
                    <img src={qatarFlag} alt="" className="rounded-full size-5 object-fit"/>
                     {lang === 'en'? "EN" : "AR"}
                </Button>
            </div>
        </>
    )
}