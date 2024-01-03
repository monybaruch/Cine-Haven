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
            Add To Cart - ${bluray.price.purchase} (Purchase)
          </Button>
        </ListGroupItem>
        {Object.entries(bluray.price.rental).map(([period, price]) => (
          <ListGroupItem key={period}>
            <Row>
              <Col>{period} Rental:</Col>
              <Col>
                <strong>${price}</strong>
              </Col>
            </Row>
            <Button className="btn-block mt-2" type="button" disabled={bluray.stock === 0}>
              Rent for {period}
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};
export default BlurayPriceCard;
