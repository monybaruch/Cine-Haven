import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import BlurayPage from './pages/BlurayPage';
import HomePage from './pages/HomePage.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/bluray/:id" element={<BlurayPage />} />
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
