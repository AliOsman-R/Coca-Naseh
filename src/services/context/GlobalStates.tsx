import { createContext, useState } from 'react'
import { type ContextProps, type GlobalStatesType } from '../../types/type'

export const GlobalContext = createContext<GlobalStatesType | null>(null)

const GlobalStatesProvider = ({children}: ContextProps) => {
    const [activeLink, setActiveLink] = useState<string>("")

    return (
        <GlobalContext.Provider  value={{activeLink, setActiveLink}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStatesProvider;