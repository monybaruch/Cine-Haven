import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
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
    </Route>
  )
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />{' '}
    </Provider>
  );
}

export default App;
