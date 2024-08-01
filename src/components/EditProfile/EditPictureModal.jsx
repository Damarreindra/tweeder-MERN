import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
  } from '@chakra-ui/react'
import EditPictureForm from './EditPictureForm'


  function EditPictureModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button  mt={[2, 4]} 
            variant="outline" 
            colorScheme='green' 
            borderRadius="3xl"  onClick={onOpen}>Edit Profile</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
      <EditPictureForm/>

            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditPictureModal