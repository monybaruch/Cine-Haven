import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import PrivateRoute from './components/PrivateRoute.jsx';
import PlaceOrderPage from './pages/PlaceOrderPage.jsx';
import SharedLayout from './components/SharedLayout';
import DeliveryPage from './pages/DeliveryPage.jsx';
import PaymentPage from './pages/PaymentPage.jsx';
import RegisterPage from './pages/RegisterPage';
import OrderPage from './pages/OrderPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import BlurayPage from './pages/BlurayPage';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/bluray/:id" element={<BlurayPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<DeliveryPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/orders/:id" element={<OrderPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  );
}

export default App;
