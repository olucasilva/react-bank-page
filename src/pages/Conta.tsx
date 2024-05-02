import { Center, SimpleGrid } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IAccountInfo, getAccountInfo, authentication } from "../api"
import { CardInfo, SkeletonCardInfo } from "../components/CardInfo"
import { AppContext } from "../components/AppContext"


const Conta = () => {
    const { token } = useContext(AppContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [accountInfo, setAccountInfo] = useState<IAccountInfo>()

    useEffect(() => {
        const validateAccount = async () => {
            console.log(id);
            
            const data = await authentication(token)
            if (data !== id) {
                navigate(`/`)
            }else{
                getData()
            }
        }
        const getData = async () => {
            const data: IAccountInfo = await getAccountInfo(id ? id : '')
            setAccountInfo(data)
        }

        validateAccount()
    }, [token, id, navigate])

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop="15px">
                {
                    accountInfo === undefined || accountInfo === null ?
                        (
                            <>
                                <SkeletonCardInfo />
                                <SkeletonCardInfo />
                            </>
                        ) : (
                            <>
                                <CardInfo
                                    title={`Seja bem vindo!`}
                                    content={
                                        [
                                            `Agência: ${accountInfo?.agency}`,
                                            `Conta: ${accountInfo?.accountNumber}`,
                                            `Última Atualização: ${accountInfo?.loginDate}`
                                        ]}
                                />
                                <CardInfo title="Saldo" content={[`${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(accountInfo?.balance)}`]} />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta