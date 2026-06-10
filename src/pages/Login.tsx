import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 ADD THIS
import { login } from "../api/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // 👈 ADD THIS

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      setMessage("Login successful");

      navigate("/projects"); // 👈 THIS IS THE IMPORTANT LINE
    } catch (error: any) {
      console.log("ERROR:", error);

      if (error.response) {
        console.log("STATUS:", error.response.status);
        console.log("DATA:", error.response.data);

        if (error.response.status === 401) {
          setMessage("Wrong username or password");
        } else {
          setMessage(`Server error: ${error.response.status}`);
        }
      } else {
        setMessage("Cannot reach backend (check URL or server)");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      {message && <p>{message}</p>}
    </form>
  );
}