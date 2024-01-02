import { Row, Col } from 'react-bootstrap';
import blurays from '../data/blu-ray.js';
import Bluray from './../components/Bluray';
const HomePage = () => {
  return (
    <>
      <h1>Latest Blu-ray movies</h1>
      <Row>
        {blurays.map((bluray) => (
          <Col sm={12} md={6} lg={4} xl={3} key={bluray._id}>
            <Bluray bluray={bluray} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomePage;
