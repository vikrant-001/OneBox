import {Box} from '@chakra-ui/react'
import ThemeToggle from '../auth/ThemeToggle'
import Sidebar from '../pages/Sidebar'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthContext from '../auth/AuthContext';
import { useContext } from 'react';
const MainPage = () => {
  const authctx = useContext(AuthContext);
  const [querry] =  useSearchParams();
  const nevigate = useNavigate();
  const token = querry.get('token');
  if(token){
    authctx.userLogin(token);
  }
  
  if(!token){
    nevigate('/');
  }
  return (
    <Box>
      <ThemeToggle/>
      <Sidebar/>
    </Box>
  )
}

export default MainPage