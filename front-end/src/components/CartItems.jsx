import { Col, Row, ListGroup, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const CartItems = ({ cartItems, addToCartHandle, removeFromCartHandle }) => {
  return (
    <Col md={8}>
      {cartItems.length === 0 ? (
        <h3 className="bg-danger">
          Your cart is empty <Link to="/">Go Back</Link>
        </h3>
      ) : (
        <ListGroup variant="flush">
          {cartItems.map((cartItem) => (
            <ListGroup.Item key={cartItem._id}>
              <Row>
                <Col md={2}>
                  <Image src={cartItem.image} alt={cartItem.title} fluid rounded></Image>
                </Col>
                <Col md={3}>
                  <Link to={`/bluray/${cartItem._id}`}>{cartItem.title}</Link>
                </Col>
                <Col md={2}>${cartItem.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={cartItem.quantity}
                    onChange={(e) => addToCartHandle(cartItem, e.target.value)}
                  >
                    {[...Array(cartItem.stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button type="button" variant="light" onClick={() => removeFromCartHandle(cartItem._id)}>
                    <FaTrashAlt />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
  );
};
export default CartItems;
