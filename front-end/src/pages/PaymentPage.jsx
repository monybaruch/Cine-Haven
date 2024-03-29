import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  //setting up paypal
  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const paymentHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <h1 className="formTitle">Payment Method</h1>
      <Form onSubmit={paymentHandler}>
        <Form.Group className="mb-3">
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="PayPal or Credit Card"
              id="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="formButton">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
export default PaymentPage;
