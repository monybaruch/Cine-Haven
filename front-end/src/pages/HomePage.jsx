import { useGetBluraysQuery } from '../slices/bluraysSlice';
import Bluray from './../components/Bluray';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
const HomePage = () => {
  const { data: blurays, isError, isLoading } = useGetBluraysQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h2>{isError?.data.message || isError.error}</h2>
      ) : (
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
      )}
    </>
  );
};
export default HomePage;
