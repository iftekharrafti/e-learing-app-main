import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import './MainNavbar.css';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
            <Link to="/">
                <Image className="logo" src={logo} alt="logo" />
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
                <Link className="text-black text-decoration-none" to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/courses">Courses</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/about">About Us</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/instructors">Instructors</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/notice">Notice</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/blog">Blog</Link>
            </Nav.Link>
            <Nav.Link>
                <Link  className="text-black text-decoration-none" to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;