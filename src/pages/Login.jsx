import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { error, isAuthenticated, login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.lo;
    login({ email, password });
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <main className="page-container position-relative">
      <Header title={title} />
      <Form className="login-form position-absolute" onSubmit={handleSubmit}>
        {error && !isAuthenticated && <p>{error}</p>}
        <Form.Group>
          <Form.Label className="text-white fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-white fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Login</Button>
      </Form>
    </main>
  );
};

export default Login;
