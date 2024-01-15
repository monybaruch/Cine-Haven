import { addToCart, removeFromCart } from '../slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import CartSummary from '../components/CartSummary';
import CartItems from '../components/CartItems';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandle = async (bluray, quantity) => {
    dispatch(addToCart({ ...bluray, quantity }));
  };

  const removeFromCartHandle = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandle = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <Row>
      <h1>Welcome To Your Shopping Cart</h1>
      <CartItems cartItems={cartItems} addToCartHandle={addToCartHandle} removeFromCartHandle={removeFromCartHandle} />
      <CartSummary cartItems={cartItems} checkoutHandle={checkoutHandle} />
    </Row>
  );
};
export default CartPage;
