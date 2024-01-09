import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status" style={{ color: '#3498db' }}></Spinner>
    </div>
  );
};

export default Loader;
