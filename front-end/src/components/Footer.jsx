import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-ceter py-3">
            <p>Cine Haven &copy; {Year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
