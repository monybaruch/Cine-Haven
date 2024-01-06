import { Button, Card, ListGroup, Col, Row, ListGroupItem } from 'react-bootstrap';
const BlurayPriceCard = ({ bluray }) => {
  return (
    <Card>
      <ListGroup>
        <ListGroupItem>
          <Row>
            <Col>Status:</Col>
            <Col>
              <strong>{bluray.stock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
            </Col>
          </Row>
        </ListGroupItem>
        <ListGroupItem>
          <Button className="btn-block" type="button" disabled={bluray.stock === 0}>
            Add To Cart - ${bluray.price}
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};
export default BlurayPriceCard;
