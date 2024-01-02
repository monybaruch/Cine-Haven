import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Bluray = ({ bluray }) => {
  return (
    <Card className="my-2 p-2 rounded">
      <Link to={`/bluray/${bluray._id}`}>
        <Card.Img src={bluray.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/bluray/${bluray._id}`}>
          <Card.Title as="div">
            <h3>{bluray.title}</h3>
          </Card.Title>
        </Link>
        <Card.Text as="p">{bluray.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Bluray;
