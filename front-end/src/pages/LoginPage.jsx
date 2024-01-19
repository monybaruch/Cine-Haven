import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';
  const { email, setEmail, password, setPassword, loginHandler } = useAuth(redirect, navigate);

  return (
    <FormContainer>
      <h1 className="formTitle">Login In</h1>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="formLabel">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="formLabel">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField"
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="formButton">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Do not have an account?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Register here</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default LoginPage;
