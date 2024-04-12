import {Box} from '@chakra-ui/react'
import ThemeToggle from '../auth/ThemeToggle'
import Sidebar from '../pages/Sidebar'
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const [querry] =  useSearchParams();
  const nevigate = useNavigate();

  const token = querry.get('token');
  localStorage.setItem('token',token);
  
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