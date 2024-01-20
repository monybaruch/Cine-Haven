import { Row, Col } from 'react-bootstrap';
const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer>
      <Row>
        <Col className="text-center py-2 primary-color text-light">
          <h5>Created by Mony Baruch , Copyright &copy; {Year}, All Rights Reserved</h5>
        </Col>
      </Row>
    </footer>
  );
};
export default Footer;
