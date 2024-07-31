'use client'

import React, { ChangeEvent, useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  CardHeader,
  Stack,
  StackDivider
} from '@chakra-ui/react';

const Home = () => {
  const { username, jobTitle, setUsername, setJobTitle, isModalOpen, setIsModalOpen } = useAppContext();
  
  const [page, setPage] = useState(1);
  const [usernameError, setUsernameError] = useState('');
  const [jobTitleError, setJobTitleError] = useState('');

  // Handle input change for username
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(value.length < 4 ? 'Username must be greater than 4 characters' : '');
  };

  // Handle input change for job title
  const handleJobTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setJobTitle(value);
    setJobTitleError(value.length < 4 ? 'Job Title must be greater than 4 characters' : '');
  };

  // Check if username and job title are valid
  const isUsernameValid = username.length >= 4;
  const isJobTitleValid = jobTitle.length >= 4;

  return (
    <>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          size='xl'
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome!</ModalHeader>
            <ModalBody>
              {page === 1 ? (
                <FormControl isRequired isInvalid={!!usernameError}>
                  <FormLabel>Enter Username:</FormLabel>
                  <Input
                    placeholder='Username'
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {usernameError && <FormHelperText color='red.500'>{usernameError}</FormHelperText>}
                </FormControl>
              ) : (
                <FormControl isRequired isInvalid={!!jobTitleError}>
                  <FormLabel>Enter Job Title:</FormLabel>
                  <Input
                    placeholder='Job Title'
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                  {jobTitleError && <FormHelperText color='red.500'>{jobTitleError}</FormHelperText>}
                </FormControl>
              )}
            </ModalBody>
            <ModalFooter>
              {page === 1 ? (
                <Button
                  colorScheme='blue'
                  onClick={() => setPage(2)}
                  isDisabled={!isUsernameValid}
                >
                  Next
                </Button>
              ) : (
                <Button
                  colorScheme='blue'
                  onClick={() => setIsModalOpen(false)}
                  isDisabled={!isJobTitleValid}
                >
                  Submit
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <Card variant='outline' marginTop={10}>
          <CardHeader>
            <Heading size='md'>Profile:</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Text>Username: {username}</Text>
              <Text>Title: {jobTitle}</Text>
            </Stack>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Home;
