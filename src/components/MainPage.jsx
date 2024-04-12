import {Box} from '@chakra-ui/react'
import ThemeToggle from '../auth/ThemeToggle'
import Sidebar from '../pages/Sidebar'
import { useSearchParams } from 'react-router-dom';
const MainPage = () => {
  const [querry] =  useSearchParams();
  const token = querry.get('token');
  localStorage.setItem('token',token);
  return (
    <Box>
      <ThemeToggle/>
      <Sidebar/>
    </Box>
  )
}

export default MainPage