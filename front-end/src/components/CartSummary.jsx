import { Col, Card, ListGroup, Button } from 'react-bootstrap';

const CartSummary = ({ cartItems, checkoutHandle }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

  return (
    <Col md={4}>
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h4>Total Items: {totalItems}</h4>
            <h4>Total Price: ${totalPrice}</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button type="button" className="btn-block" disabled={cartItems.length === 0} onClick={checkoutHandle}>
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
};
export default CartSummary;
