import { Card } from 'react-bootstrap';
const Bluray = ({ bluray }) => {
  return (
    <Card className="my-2 p-2 rounded">
      <a href={`/bluray/${bluray._id}`}>
        <Card.Img src={bluray.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/bluray/${bluray._id}`}>
          <Card.Title as="div">
            <h3>{bluray.title}</h3>
          </Card.Title>
        </a>
        <Card.Text as="p">{bluray.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Bluray;
