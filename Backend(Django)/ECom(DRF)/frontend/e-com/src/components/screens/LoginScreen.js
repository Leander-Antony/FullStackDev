import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Message from "../Message";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please enter both email and password.");
    } else {
      setError("");
      navigate("/");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card>
            <Card.Header as="h3" className="text-center bg-black text-light">
              Login
            </Card.Header>
            <Card.Body>
              {error && <Message variant="danger">{error}</Message>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>{" "}
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>
                    <span>Password</span>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Enter password"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      <i
                        className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                      ></i>
                    </Button>
                  </InputGroup>
                </Form.Group>
                <br />
                <div className="d-grid gap-2">
                  <Button className="btn btn-md btn-success" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  Don't have an account? <Link to="/signup">Signup</Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default LoginScreen;
