import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="center"
        py={2}
        position="fixed"
        top={80}
        left={0}
        right={150}
        zIndex={999}
        bg="black"
        boxShadow="md"
        direction="row"
        
      >
        <Link to="/">
          <Text fontSize="xl" fontWeight="bold" color="white" ml={100}>
          𝙷𝚘𝚖𝚎 
          </Text>
        </Link>
        <Link to="/about">
          <Text fontSize="lg" fontWeight="bold" color="white" ml={100}>
          𝙰𝚋𝚘𝚞𝚝 
          </Text>
        </Link>
        <Link to="/roadmap">
          <Text fontSize="lg" fontWeight="bold" color="white" ml={100}>
           𝚁𝚘𝚊𝚍𝚖𝚊𝚙
          </Text>
        </Link>
        <Link to="/get-whitelisted">
          <Text fontSize="lg" fontWeight="bold" color="white" ml={100}>
          𝙶𝚎𝚝 𝚆𝚑𝚒𝚝𝚎𝚕𝚒𝚜𝚝𝚎𝚍 
          </Text>
        </Link>
        <Link to="/contact">
          <Text fontSize="lg" fontWeight="bold" color="white" ml={100}>
          𝙲𝚘𝚗𝚝𝚊𝚌𝚝
          </Text>
        </Link>
      </Flex>
     
    </>
  );
};

export default Navigation;
