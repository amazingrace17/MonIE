import {
  Box,
  Flex,
  Text,
  Heading,
  Center,
  Image,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import tolulope from '../icons/rsz_062d580a-a616-43e9-a72d-51f4ea3b926e.jpg'


import Office from '../icons/office.png';
import { MdWork } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

function TeamInfo() {
  return (
    <Box>
      <Center
        pos="relative"
        h="500px"
        _before={{
          content: '""',
          bgImage: Office,
          bgSize: 'cover',
          pos: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.4,
        }}
      >
        <Box textAlign="center" maxW="700px" zIndex="dropdown">
          <Heading color="brand.300" fontSize={['md', '3xl']}>
            A global-standard team of impassionate talents
          </Heading>
          <Text color="brand.400" fontSize={['sm', 'md']}>
            We are a team of diverse talents that utilized our individual
            strengths inorder to build a product that serves the character of
            its purpose
          </Text>
        </Box>
      </Center>
      <Stack m={[4, 6, 12]} px={[2, 4, 8]} py={24} spacing="20px">
        <Flex
          direction={['column', 'column', 'row']}
          justify="space-around"
          align="center"
        >
         
        </Flex>
        <Flex
          direction={['column', 'column', 'row']}
          justify="space-around"
          align="center"
        >
          <Flex alignItems="center" justifyContent="center">
            <Box w="300px" mx="auto" shadow="sm" rounded="lg" overflow="hidden">
              <Image
                w="full"
                h={56}
                fit="cover"
                objectPosition="center"
                src={tolulope}
                fallbackSrc="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                alt="avatar"
              />
              <Box py={4} px={6} textAlign="center">
                <Heading color="brand.400" fontSize="2xl">
                  Tolulope Grace Arinola
                </Heading>
                <Text>Full Stack Developer</Text>
                <Flex justify="center" p={3}>
                  <IconButton
                    as="a"
                    href="https://github.com/amazingrace17"
                    icon={<FaLinkedin size="20px" />}
                    target="_blank"
                    variant="ghost"
                  />
                  <IconButton
                    as="a"
                    href="https://tolulopearinolagrace.netlify.app/"
                    icon={<MdWork size="20px" />}
                    variant="ghost"
                    target="_blank"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
          
        </Flex>
      </Stack>
    </Box>
  );
}

export default TeamInfo;
