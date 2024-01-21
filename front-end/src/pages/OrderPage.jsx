import { useGetOrderDetailsQuery, usePayOrderMutation, useGetPaypalClientIdQuery } from '../slices/orderSlice';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Row, Col, Button, ListGroup, Card, Image } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Loader from './../components/Loader';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const OrderPage = () => {
  const { id: orderId } = useParams();
  const { data: order, refetch, isLoading } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingToPay }] = usePayOrderMutation();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const { data: paypal, isLoading: loadingPayPal, error: payPalError } = useGetPaypalClientIdQuery();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!payPalError && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': paypal.clientId,
            currency: 'USD',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [payPalError, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success('Payment successful');
      } catch (error) {
        toast.error(error.message);
      }
    });
  }

  async function onApproveTest() {
    await payOrder({ orderId, details: { payer: {} } });
    refetch();
    toast.success('Order is paid');
  }

  function onError(error) {
    toast.error(error.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }
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
          <ListGroup.Item>
            <h2 className="title">Payment Method:</h2>
            <p>
              <strong>Method: </strong>
              {order.paymentMethod}
            </p>
            <p>
              {order.isPaid ? (
                <>
                  <strong>Payment Status:</strong> <span className="text-success"> Paid on {order.paidAt}</span>
                </>
              ) : (
                <>
                  <strong>Delivery Status:</strong> <span className="text-danger">Order Not Paid </span>
                </>
              )}
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h2 className="title">Order Items:</h2>
            {order.orderItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.title} fluid rounded />
                  </Col>
                  <Col>
                    <Link to={`/bluyray/${item.bluyray}`}>{item.title}</Link>
                  </Col>
                  <Col md={4}>
                    {' '}
                    {item.quantity} x ${item.price} = ${item.quantity * item.price}
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="formTitle">Order Summary:</h3>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {order.isPaid && (
                <ListGroup.Item>
                  {loadingToPay && <Loader />}

                  {isPending ? (
                    <Loader />
                  ) : (
                    <div>
                      <Button style={{ marginBottom: '10px' }} onClick={onApproveTest}>
                        Test Pay Order
                      </Button>

                      <div>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={onError}
                        ></PayPalButtons>
                      </div>
                    </div>
                  )}
                </ListGroup.Item>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default OrderPage;
