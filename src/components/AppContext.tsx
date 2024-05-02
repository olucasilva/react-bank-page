import { createContext, useState } from "react"
import { getToken } from "../services/storage"

interface IAppContext {
    token: string
    setContextToken: (token: string) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {
    const localStorageToken = getToken()
    const [token, setContextToken] = useState<string>(localStorageToken ? localStorageToken : '')

    return (
        <AppContext.Provider value={{ token, setContextToken }}>
            {children}
        </AppContext.Provider>
    )
}