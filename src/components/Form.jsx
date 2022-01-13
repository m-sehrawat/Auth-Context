import { VStack, Input, Heading, Button } from "@chakra-ui/react";


export const Form = () => {

    return (
        <>
            <form onSubmit={() => alert("working")}>
                <VStack
                    gap={3}
                    maxW={400}
                    p='40px 20px'
                    m='50px auto'
                    rounded={10}
                    border={'1px solid #CDDEFF'}
                >
                    <Heading>Login</Heading>
                    <Input type='text' placeholder="Username" />
                    <Input type='password' placeholder="Password" />
                    <Button type='submit' colorScheme='teal' w='100%'>Submit
                    </Button>
                </VStack>
            </form>
        </>
    );
};