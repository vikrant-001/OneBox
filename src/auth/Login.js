import { Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { Button} from '@chakra-ui/react'
const Login = () => {
  return (
    <Box width="27%" 
      display='flex'
      flexDirection='column'
      alignItems="center"
      justifyContent='center'
      gap='1rem'
      background='black'
      textColor='white'
      padding='3rem'
      >
      <Button colorScheme='teal' variant='outline' width='80%'> Login with Goolge </Button>
      <Button colorScheme='blue'  width="40%" paddingX='4rem'>Create Account</Button>
      <Box colorScheme='teal' variant='ghost'>Already have Account <Button variant='ghost' colorScheme='blue'><Link to='https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/homepage'>Sign In</Link> </Button></Box>
    </Box>
  )
 }

export default Login