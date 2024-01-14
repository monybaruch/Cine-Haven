import { Card } from 'react-bootstrap';
const Bluray = ({ bluray }) => {
  const limitedDesc = (desc, maxLength = 100) => {
    return desc.length > maxLength ? desc.substring(0, maxLength) + '...' : desc;
  };
  return (
    <Card className="my-3 p-2 rounded" style={{ height: '95%' }}>
      <a href={`/bluray/${bluray._id}`}>
        <Card.Img src={bluray.image} variant="top" style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
      </a>
      <Card.Body>
        <a href={`/bluray/${bluray._id}`}>
          <Card.Title as="div" style={{ height: '25px', overflow: 'hidden' }}>
            <strong>{bluray.title}</strong>
          </Card.Title>
        </a>
        <Card.Text as="p" style={{ height: '100px', overflow: 'hidden' }}>
          {limitedDesc(bluray.description)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Bluray;
