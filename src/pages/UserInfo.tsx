import { Center, SimpleGrid } from "@chakra-ui/react"
import { CardInfo, SkeletonCardInfo } from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate, useParams } from "react-router-dom"
import { authentication, getUserInfo, IUserInfo } from "../api"

const UserInfo = () => {
    const { token } = useContext(AppContext)
    const { id } = useParams()

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState<IUserInfo>()

    useEffect(() => {
        const validateAccount = async () => {
            const data = await authentication(token)
            data !== id && navigate(`/`)
        }
        const getData = async () => {
            const data: IUserInfo = await getUserInfo(id ? id : '')
            setUserInfo(data)
        }

        validateAccount()
        getData()
    }, [token, id, navigate])

    return (
        <Center>
            <SimpleGrid columns={1} spacing={8} paddingTop="15px">
                {
                    userInfo === undefined || userInfo === null ?
                        (
                            <SkeletonCardInfo />
                        ) : (
                            <CardInfo
                                    title={`Dados do usuário:`}
                                    content={
                                        [
                                            `Nome: ${userInfo?.name}`,
                                            `E-mail: ${userInfo?.email}`,
                                            `Cliente desde: ${userInfo?.inclusionDate}`
                                        ]}
                                />
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default UserInfo