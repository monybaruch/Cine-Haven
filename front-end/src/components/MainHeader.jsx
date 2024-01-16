import { Navbar, Container, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { useLogoutMutation } from '../slices/usersSlice';
import { LinkContainer } from 'react-router-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
import { logout } from '../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const MainHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [logOutCall] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = async () => {
    try {
      await logOutCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

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
                      {cartItems.reduce((acc, total) => acc + Number(total.quantity), 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="text-light">
                    <FaCircleUser />
                    &nbsp;Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default MainHeader;
