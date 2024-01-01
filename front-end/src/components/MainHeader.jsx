import { Navbar, Container, Nav } from 'react-bootstrap';
import { RiShoppingCartFill } from 'react-icons/ri';
import { FaCircleUser } from 'react-icons/fa6';
const MainHeader = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="/public/logo.png" width="30" height="30" className="d-inline-block align-top" /> Cine Haven
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <RiShoppingCartFill />
                &nbsp;Cart
              </Nav.Link>
              <Nav.Link href="/login">
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
