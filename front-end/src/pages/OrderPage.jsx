import { Row, Col, Button, ListGroup, Card, Image } from 'react-bootstrap';
import { useGetOrderDetailsQuery } from '../slices/orderSlice';
import { useParams } from 'react-router-dom';
import Loader from './../components/Loader';

const OrderPage = () => {
  const { id: orderId } = useParams();
  const { data: order, refetch, isLoading } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <Loader />
  ) : (
    <Row className="py-2">
      <Col md={8}>
        <ListGroup>
          <ListGroup.Item>
            <h2 className="title">Shipping Details:</h2>
            <p>
              <strong>Order Id: </strong>
              {order._id}
            </p>
            <p>
              <strong>Name: </strong>
              {order.user.name}
            </p>
            <p>
              <strong>Email: </strong>
              {order.user.email}
            </p>
            <p>
              <strong>Shipping Adress: </strong>
              {order.shippingAddress.address} , {order.shippingAddress.city} , {order.shippingAddress.postalCode},
              {order.shippingAddress.country}
            </p>
            <p>
              {order.isDelivered ? (
                <>
                  <strong>Delivery Status:</strong>{' '}
                  <span className="text-success"> Delivered on {order.deliveredAt}</span>
                </>
              ) : (
                <>
                  <strong>Delivery Status:</strong> <span className="text-danger">Order Not Delivered </span>
                </>
              )}
            </p>
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>2</Col>
    </Row>
  );
};
export default OrderPage;
