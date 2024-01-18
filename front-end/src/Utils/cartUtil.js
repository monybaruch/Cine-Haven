export const updateCart = (state) => {
  const itemsPrice = state.cartItems.reduce((acc, item) => acc + (item.price * 100 * item.quantity) / 100, 0);
  state.itemsPrice = itemsPrice.toFixed(2);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  state.shippingPrice = shippingPrice.toFixed(2);
  const totalPrice = itemsPrice + shippingPrice;
  state.totalPrice = totalPrice.toFixed(2);
  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
