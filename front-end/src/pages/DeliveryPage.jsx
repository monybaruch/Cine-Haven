import { saveShippingAddress } from '../slices/cartSlice';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DeliveryPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
  const [country, setCountry] = useState(shippingAddress?.country || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deliveryHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <h1 className="formTitle">Welcome to the delivery page:</h1>
      <Form onSubmit={deliveryHandler}>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label className="formLabel">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="inputField"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label className="formLabel">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="inputField"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="postalCode">
          <Form.Label className="formLabel">Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="inputField"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="country">
          <Form.Label className="formLabel">Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="inputField"
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="formButton">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
export default DeliveryPage;
