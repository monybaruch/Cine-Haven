import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Bluray from './../components/Bluray';

const HomePage = () => {
  const [blurays, setBlurays] = useState([]);

  useEffect(() => {
    const fetchBlurays = async () => {
      const { data } = await axios.get('http://localhost:4000/blurays');
      setBlurays(data);
    };

    fetchBlurays();
  }, []);

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
