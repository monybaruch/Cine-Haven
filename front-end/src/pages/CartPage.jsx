import { Col, Image, ListGroup, Row, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { addToCart } from '../slices/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const addToCartHandle = async (bluray, quantity) => {
    dispatch(addToCart({ ...bluray, quantity }));
  };

  return (
    <Row>
      <h1>Welcome To Your Shopping Cart</h1>
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
                    {' '}
                    <Form.Control
                      as="select"
                      value={cartItem.quantity}
                      onChange={(e) => addToCartHandle(cartItem, Number(e.target.value))}
                    >
                      {[...Array(cartItem.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button type="button" variant="light">
                      <FaTrashAlt />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>Total Items: {cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)}</h4>
              <h4>Total price: {cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)}$</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type="buttonn" className="btn-block" disabled={cartItems.length === 0}>
                Click To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default CartPage;
