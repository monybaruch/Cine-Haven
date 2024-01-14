export const updateCart = (state) => {
  //calc the items price
  state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  //calc the shipping cost (if the total order is over 60$ then the shipping is free , else the shipping is 7$)

  state.shippingPrice = state.itemsPrice > 60 ? 0 : 7;

  // calc total price

  state.totalPrice = Number(state.itemsPrice) + Number(state.shippingPrice).toFixed(2);

  //save the state to local storage

  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
