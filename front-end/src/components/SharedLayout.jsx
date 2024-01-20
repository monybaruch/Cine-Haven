import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <>
      <MainHeader />
      <div className="main">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SharedLayout;
