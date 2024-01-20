import BlurayListDetails from '../components/BlurayListDetails';
import BlurayPriceCard from '../components/BlurayPriceCard';
import Loader from '../components/Loader';
import { useGetBlurayQuery } from '../slices/bluraysSlice';
import { Col, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlurayPage = () => {
  const { id: blurayId } = useParams();
  const { data: bluray, isError, isLoading } = useGetBlurayQuery(blurayId);

  return (
    <>
      <Link className="btn btn-light mt-2" to="/">
        Go Back To Home Page
      </Link>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2>{isError.error}</h2>
      ) : (
        <Row className="p-1">
          <Col md={5}>
            <Card className="m-3 rounded">
              <Card.Img src={bluray.image} variant="top" className="img-fluid" />
            </Card>
          </Col>
          <Col md={4}>
            <BlurayListDetails bluray={bluray} />
          </Col>
          <Col md={3}>
            <BlurayPriceCard bluray={bluray} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default BlurayPage;
