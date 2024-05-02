import { Center } from "@chakra-ui/react"
import { CardInfo } from "../components/CardInfo"

const Home = () => {
    return (
        <Center marginTop='15px'>
            <CardInfo
                title={`Saudações.`}
                content={
                    [
                        <br />,
                        'Este é um site de demonstração de uso de ReactJS',
                        <br />,
                        'Para fazer o login use uma das contas abaixo:',
                        '- first@account.bank',
                        '- second@account.bank',
                        '- third@account.bank',
                        <br />,
                        'Para todas a senha é padrão: 123456'
                    ]}
            />
        </Center>
    )
}

export default Home