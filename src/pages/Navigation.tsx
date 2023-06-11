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
        top={0}
        left={0}
        right={150}
        zIndex={999}
        bg="white"
        boxShadow="md"
        direction="row"
        
      >
        <Link to="/">
          <Text fontSize="lg" fontWeight="bold" color="black" ml={100}>
            Home
          </Text>
        </Link>
        <Link to="/about">
          <Text fontSize="lg" fontWeight="bold" color="black" ml={100}>
            About
          </Text>
        </Link>
        <Link to="/roadmap">
          <Text fontSize="lg" fontWeight="bold" color="black" ml={100}>
            Roadmap
          </Text>
        </Link>
        <Link to="/get-whitelisted">
          <Text fontSize="lg" fontWeight="bold" color="black" ml={100}>
            Get Whitelisted
          </Text>
        </Link>
        <Link to="/contact">
          <Text fontSize="lg" fontWeight="bold" color="black" ml={100}>
            Contact
          </Text>
        </Link>
      </Flex>
   
    </>
  );
};

export default Navigation;
