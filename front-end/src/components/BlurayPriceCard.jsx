import { Button, Card, ListGroup, Col, Row, ListGroupItem, Form } from 'react-bootstrap';
import { addToCart } from '../slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const BlurayPriceCard = ({ bluray }) => {
  const [quantity, setQuantity] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCartHandle = () => {
    dispatch(addToCart({ ...bluray, quantity }));
    navigate('/cart');
  };

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
        {bluray.stock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col>Quantity:</Col>
              <Col>
                <Form.Control as="select" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                  {[...Array(bluray.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        )}
        <ListGroupItem>
          <Button className="btn-block" type="button" disabled={bluray.stock === 0} onClick={addToCartHandle}>
            Add To Cart - ${bluray.price}
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};
export default BlurayPriceCard;
