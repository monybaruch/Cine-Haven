import SharedLayout from './components/SharedLayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index={true} path="/" element={<HomePage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
