import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

import {
  Box,
  Button,
  Input,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);

      navigate("/projects");
    } catch (error: any) {
      if (error.response?.status === 401) {
        setMessage("Wrong username or password");
      } else {
        setMessage("Login failed");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        as="form"
        onSubmit={handleLogin}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        width="300px"
      >
        <VStack gap={4}>
          <Heading size="md">Login</Heading>

          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>

          {message && <Text color="red.500">{message}</Text>}
        </VStack>
      </Box>
    </Box>
  );
}