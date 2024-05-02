import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Input,
    Stack
} from '@chakra-ui/react'
import { MyButton } from './MyButton'
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../services/login';
import { ObservationLabel } from './ObservationLabel';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import { IAuth } from '../api';
import { setToken } from '../services/storage';

export interface IFormInput {
    email: string;
    password: string;
}

export const Login = () => {    
    const { setContextToken } = useContext(AppContext)
    
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        async function doLogin() {
            setLoading(1)

            const account: IAuth = await login(data)

            setLoading(0)

            if (account.id !== "") {
                reset()
                onClose()
                
                setToken(account.token)
                setContextToken(account.token)
                navigate(`/account/${account.id}`)
            }
            else
                setLoading(-1)
        }

        doLogin()
    };

    const [loading, setLoading] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (isOpen === false) {
            setLoading(0)
            reset()
        }
    }, [])

    return (
        <>
            <Button onClick={onOpen} left="20px">Acessar conta</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalOverlay />
                    <ModalContent bg="#141227" top="10%">
                        <ModalHeader>
                            <Text fontSize="3xl" as="b" align="center" color="#7f28b5">
                                Faça o login
                            </Text>
                        </ModalHeader>
                        <ModalCloseButton color="white" />
                        <ModalBody>
                            <Stack spacing={2} color="white">
                                <Input
                                    placeholder="email"
                                    {...register("email")}
                                />
                                <Input
                                    placeholder="password"
                                    type="password"
                                    {...register("password")}
                                />
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                            <MyButton loading={loading} />
                            <Button width="20%" color="white" variant='ghost' onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                        {
                            loading === 2 ? (
                                <ModalFooter justifyContent="center">
                                    <ObservationLabel textColor="green" text="Usuário logado com sucesso" />
                                </ModalFooter>
                            ) : loading === -1 ? (
                                <ModalFooter justifyContent="center">
                                    <ObservationLabel textColor="red" text="Email ou senha inválidos!" />
                                </ModalFooter>
                            ) : (null)
                        }
                    </ModalContent>
                </form>
            </Modal>
        </>
    )
}