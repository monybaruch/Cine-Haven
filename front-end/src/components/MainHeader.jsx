import { Navbar, Container, Nav } from 'react-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
const MainHeader = () => {
  return (
    <header>
      <Navbar variant="dark" expand="md" collapseOnSelect className="primary-color">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="/public/logo.png" width="50" height="50" className="d-inline-block align-center p-1" />
            {'  '}
            CineHaven
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart" className="text-light">
                <RiShoppingCartFill />
                &nbsp;Cart
              </Nav.Link>
              <Nav.Link href="/login" className="text-light">
                <FaCircleUser />
                &nbsp;Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default MainHeader;
