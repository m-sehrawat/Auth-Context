import { Box, Flex, Button, Spacer, Heading, Center } from "@chakra-ui/react"


export const Navbar = () => {

    return (
        <Flex bg='#F5F5F5'>
            <Box>
                <Heading m={2}>User App</Heading>
            </Box>
            <Spacer />
            <Center mr={6}>
                <Button colorScheme='teal'>Login</Button>
            </Center>
        </Flex>
    );
};