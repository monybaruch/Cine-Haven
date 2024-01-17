export const updateCart = (state) => {
  const itemsPrice = state.cartItems.reduce((acc, item) => acc + (item.price * 100 * item.quantity) / 100, 0);
  state.itemsPrice = itemsPrice;
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = shippingPrice;
  const totalPrice = itemsPrice + shippingPrice;
  state.totalPrice = totalPrice;
  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
