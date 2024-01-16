import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import useAuth from '../hooks/useAuth';
import styles from '../assets/styles/form.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';
  const {
    email,
    setEmail,
    password,
    setPassword,
    registerHandler,
    name,
    setName,
    confirmPassword,
    setConfirmPassword,
  } = useAuth(redirect, navigate);

  return (
    <FormContainer>
      <h1 className={styles.formTitle}>Register</h1>
      <Form onSubmit={registerHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className={styles.formLabel}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className={styles.formLabel}>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className={styles.formLabel}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label className={styles.formLabel}>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className={styles.formButton}>
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> Login here</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default RegisterPage;
