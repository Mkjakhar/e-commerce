import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import { CartContext } from "../context/Context";
const LoginPage = () => {
  const { toggleLogin } = useContext(CartContext);
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      {toggleLogin ? <Login /> : <SignUp />}
    </Container>
  );
};

export default LoginPage;
