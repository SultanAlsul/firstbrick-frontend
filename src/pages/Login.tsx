import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.950"
    >
      <Box
        bg="blue.900"
        p={8}
        rounded="xl"
        shadow="2xl"
        w="400px"
      >
        <VStack gap={5}>
          <VStack gap={2}>
        <Heading
          size="2xl"
          color="white"
          textAlign="center"
          fontWeight="bold"
        letterSpacing="wide"
           >
         FirstBrick
        </Heading>

       <Heading
       size="md"
       color="gray.300"
       fontWeight="medium"
       > 
        Login
       </Heading>
       </VStack>

          <Field.Root>
            <Field.Label color="gray.200">
              Username
            </Field.Label>

            <Input
              placeholder="Enter your username"
              color="white"
              bg="blue.950"
              borderColor="gray.600"
              _placeholder={{
                color: "gray.400",
              }}
              _focusVisible={{
                borderColor: "blue.400",
              }}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label color="gray.200">
              Password
            </Field.Label>

            <Input
              type="password"
              placeholder="Enter your password"
              color="white"
              bg="blue.950"
              borderColor="gray.600"
              _placeholder={{
                color: "gray.400",
              }}
              _focusVisible={{
                borderColor: "blue.400",
              }}
            />
          </Field.Root>

          <Button
            colorPalette="blue"
            w="full"
            size="lg"
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}