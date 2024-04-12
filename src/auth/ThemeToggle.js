import { useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import {Box} from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import { LuMailOpen } from "react-icons/lu";
const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box 
      width='100%'
      height='64px'
      top='3px'
      left='57px'
      border='1px'
      padding='24px'
      background='black'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      gap='24px'
      color='black'>
      <Box color='white'>
        <LuMailOpen/>
        <Text fontSize='xl' color="white" >
          Onebox</Text>
      </Box>
      
      <Box>
        <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        />
        {/* user modal */}
      </Box>

    </Box>
  );
};

export default ThemeToggle;