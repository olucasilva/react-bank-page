import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Conta from "./pages/Conta"
import { AppContext } from "./components/AppContext"
import { useContext } from "react"
import UserInfo from "./pages/UserInfo"

const MainRoutes = () => {
    const { token } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account/:id' element={token.length > 0 ? <Conta /> : <Home />} />
            <Route path='/user/:id' element={token.length > 0 ? <UserInfo /> : <Home />} />
        </Routes>
    )
}

export default MainRoutes