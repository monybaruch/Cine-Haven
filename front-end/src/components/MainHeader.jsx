import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
const MainHeader = () => {
  return (
    <header>
      <Navbar variant="dark" expand="md" collapseOnSelect className="primary-color">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img alt="" src="/logo.png" width="50" height="50" className="d-inline-block align-center p-1" />
              {'  '}
              CineHaven
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="cart">
                <Nav.Link className="text-light">
                  <RiShoppingCartFill />
                  &nbsp;Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="login">
                <Nav.Link className="text-light">
                  <FaCircleUser />
                  &nbsp;Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default MainHeader;
