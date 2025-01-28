import { navbarList } from "../data/data"
import { useActiveLink } from "../hooks/useActiveLink"

const NavLinks = () => {
     const {activeLink, setActiveLink} = useActiveLink()
    
    const handleActiveLink = (to: string) => {
        setActiveLink(to)
    }

    return (
        <>
            {navbarList.map(({name, to}, index) => (
                <a 
                key={index}
                onClick={() => handleActiveLink(to)} 
                href={`#${to}`}
                className={`text-primary-color md:text-sm lg:text-base hover:font-semibold  ${activeLink === to? "font-semibold" : ""}`}
                >
                    {name}
                </a>
            ))}
        </>
    )
}


export default NavLinks;