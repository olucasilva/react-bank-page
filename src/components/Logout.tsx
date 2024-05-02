import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { setToken } from '../services/storage';
import { useContext } from 'react';
import { AppContext } from './AppContext';

export const Logout = () => {
    const navigate = useNavigate()
    const {setContextToken} = useContext(AppContext)
  
    function logout() {
      setToken('')
      setContextToken('')
      navigate('/')
    }
    return (
        <Button onClick={() => logout()}>Sair</Button>
    );
}