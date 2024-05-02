import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import { Login } from './Login';
import { Logout } from './Logout';
import { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';
import { getIdByToken } from '../api';

export const Header = () => {
  const { token } = useContext(AppContext)
  const [id, setId] = useState('')

  const getId = async () => {
    const id = await getIdByToken(token)
    setId(id)
  }
  getId()

  return (
    <Box position='relative' top="0" paddingY='3' width="100%" height="fit-content" bg='#141227'>
      {
        token.length > 0 ? (
          <>
            <SimpleGrid columns={3} spacing={1} width='max-content' marginLeft='15px'>
              <Logout />
              <Link to={`/account/${id}`}><Button>Conta</Button></Link>
              <Link to={`/user/${id}`}><Button>Perfil</Button></Link>
            </SimpleGrid>
          </>
        ) : (
          <Login />
        )
      }
    </Box>
  );
};
