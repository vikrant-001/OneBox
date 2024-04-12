import {Box} from '@chakra-ui/react'
import { FaHome } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { CiViewList } from "react-icons/ci";
import { LuMailOpen } from "react-icons/lu";
import { MdStackedBarChart } from "react-icons/md";
import { useState } from 'react';
import Mail from '../modals/Mail';
const Sidebar = () => {
  const [showMail,setShow] = useState(false);
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
        <Box padding='0.3rem'
              marginLeft='0.5rem'>User</Box>
        {showMail && <Mail show = {showMail}/>}
    </Box>
  )
}

export default Sidebar