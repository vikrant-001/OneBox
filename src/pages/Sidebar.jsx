import {Box,Button} from '@chakra-ui/react'
import { FaHome } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu";
import { MdStackedBarChart } from "react-icons/md";
import { useContext, useState } from 'react';
import Mail from '../modals/Mail';
import AuthContext from '../auth/AuthContext';
const Sidebar = () => {
  const authctx = useContext(AuthContext);
  const [showMail,setShow] = useState(false);
  const logoutHandler = () => {
    authctx.userLogin();
  }
  return (
    <Box display='flex'
        flexDir='column'
        justifyContent='space-evenly'
        height='634px'
        width='48px'
        color='white'
        background ='black'>
        <Box 
              height='500px'
              width='28px'
              display='flex'
              flexDirection='column'
              gap='2rem'
              padding='0.3rem'
              marginLeft='0.5rem'
              overflow='hidden'>
            <FaHome/>
            <IoMdPersonAdd/>
            <IoMailOutline/>
            <FiSend/>
            <CiViewList/>
            <Box onClick={() => setShow(!showMail)}><LuMailOpen /></Box>
            <MdStackedBarChart/>
        </Box>
        <Button padding='0.3rem'
            onClick={logoutHandler}>Logout</Button>
        {showMail && <Mail show = {showMail}/>}
    </Box>
  )
}

export default Sidebar