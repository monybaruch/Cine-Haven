import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
const MainHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
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
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: '10px', padding: '10px' }}>
                      {cartItems.reduce((acc, total) => acc + total.quantity, 0)}
                    </Badge>
                  )}
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
