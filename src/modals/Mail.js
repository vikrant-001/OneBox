import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react';
import {useDisclosure} from "@chakra-ui/react"
import { useEffect } from 'react';
import axios from 'axios'
  const Mail =(props)=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(onOpen);
    const token = localStorage.getItem('token');
    console.log(token)
    const mailHamdler = async () => {
        try {

            const config = {
                headers:{
                  Authorization:`Bearer ${token}`,
                }
              }
            // const response = await axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list',config);
            // console.log(response)
        } catch (error) {
            console.log(error.message);
        }
    }

    mailHamdler();

    useEffect(() => {
        if(props.show){
            onOpen()
        }
    },[props.show]);

    

    return (
      <>
        {/* <Button onClick={onOpen}>Hello jii</Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Mails</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Api not Working
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default Mail;