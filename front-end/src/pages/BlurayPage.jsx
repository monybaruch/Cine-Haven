import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Image, Col, Row } from 'react-bootstrap';
import blurays from '../data/blu-ray';
import BlurayListDetails from '../components/BlurayListDetails';
import BlurayPriceCard from '../components/BlurayPriceCard';
const BlurayPage = () => {
  const { id: blurayId } = useParams();
  let bluray = blurays.find((p) => p._id === blurayId);
  console.log(bluray);

  if (!bluray) {
    return <div>Bluray not found.</div>;
  }

  return (
    <>
      <Link className="btn btn-light my-2" to="/">
        Go Back To Home Page
      </Link>
      <Row>
        <Col md={5}>
          <Image src={bluray.image} alt={`${bluray.title} cover`} fluid />
        </Col>
        <Col md={4}>
          <BlurayListDetails bluray={bluray} />
        </Col>
        <Col md={3}>
          <BlurayPriceCard bluray={bluray} />
        </Col>
      </Row>
    </>
  );
};

export default BlurayPage;
