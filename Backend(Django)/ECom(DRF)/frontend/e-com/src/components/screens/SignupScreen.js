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
import { validPassword } from "./Regex";
import Message from "../Message";

function SignupScreen() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (pass1 !== pass2) {
      setError("Passwords do not match");
    } else if (!validPassword.test(pass1)) {
      setError("Invalid Password");
    } else {
      setError("Signup Success");
      // Proceed with signup logic
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
              Signup
            </Card.Header>
            <Card.Body>
              {error && <Message variant="danger">{error}</Message>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="fname">
                  <Form.Label>
                    <span>
                      <i className="fa fa-user"></i>
                    </span>{" "}
                    First Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lname">
                  <Form.Label>
                    <span>
                      <i className="fa fa-user"></i>
                    </span>{" "}
                    Last Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="pass1">
                  <Form.Label>
                    <span>Password</span>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Enter password"
                      required
                      type={showPassword ? "text" : "password"}
                      value={pass1}
                      onChange={(e) => setPass1(e.target.value)}
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
                <Form.Group className="mb-3" controlId="pass2">
                  <Form.Label>
                    <span>Confirm Password</span>
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Confirm password"
                      required
                      type={showPassword ? "text" : "password"}
                      value={pass2}
                      onChange={(e) => setPass2(e.target.value)}
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
                    Signup
                  </Button>
                </div>
              </Form>
              <Row className="py-3">
                <Col>
                  Already User? <Link to="/login">Login</Link>
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

export default SignupScreen;
