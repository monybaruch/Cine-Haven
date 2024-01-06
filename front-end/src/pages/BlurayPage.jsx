import BlurayListDetails from '../components/BlurayListDetails';
import BlurayPriceCard from '../components/BlurayPriceCard';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Image, Col, Row } from 'react-bootstrap';

const BlurayPage = () => {
  const [bluray, setBluray] = useState({
    _id: '',
    title: '',
    description: '',
    genre: [],
    director: '',
    cast: [],
    releaseYear: null,
    rating: '',
    duration: '',
    price: 0,
    image: '',
    stock: 0,
    numberOfReviews: 0,
    viewrsRating: 0,
  });

  const { id: blurayId } = useParams();

  useEffect(() => {
    const fetchBluray = async () => {
      const { data } = await axios.get(`http://localhost:4000/blurays/${blurayId}`);

      setBluray(data);
    };

    fetchBluray();
  }, [blurayId]);

  return (
    <>
      <Link className="btn btn-light my-2" to="/">
        Go Back To Home Page
      </Link>
      <Row>
        <Col md={5}>
          <Image src={bluray.image} alt={`${bluray.title} cover`} fluid />
        </Col>
        <Col md={4}>{<BlurayListDetails bluray={bluray} />}</Col>
        <Col md={3}>{<BlurayPriceCard bluray={bluray} />}</Col>
      </Row>
    </>
  );
};

export default BlurayPage;
