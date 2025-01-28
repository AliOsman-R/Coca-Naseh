import { useContext } from "react"
import { GlobalContext } from "../services/context/GlobalStates"

export const useActiveLink = () => {
  const globalContext = useContext(GlobalContext)
  
  if(!globalContext){
    throw new Error("Context error")
  } 
  
  const {activeLink, setActiveLink} = globalContext

  return {activeLink, setActiveLink}
}