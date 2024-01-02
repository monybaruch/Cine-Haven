import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import Footer from './Footer';
const SharedLayout = () => {
  return (
    <>
      <MainHeader />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default SharedLayout;
