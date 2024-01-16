import { Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { useState } from 'react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-4"></Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Email Please!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Group controlId="password" className="my-4"></Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Your Password Please!"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button type="submit" variant="primary" className="mt-2">
          Login In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          <Link to="register">Do not have an account? Register here</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default LoginPage;
