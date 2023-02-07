import {Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/logo.png';

export function Navigation(): JSX.Element {
    return (
    <Navbar className="mt-4">
        <Nav className="mx-auto">
            <Navbar.Brand href="/" className="d-flex align-items-center h-100">
            <img src={logo} width="50" height="50" className="d-inline-block align-middle me-3" alt="Soundwave logo" />{' '}
            <span className="align-middle" style={{ fontSize: '24px', color: 'white'}}>Soundwave</span>
            </Navbar.Brand>
        </Nav>
    <Nav className="mx-auto">
      <Nav.Link href="/discover" style={{ fontSize: '20px', color: 'white' }}>Discover</Nav.Link>
      <Nav.Link href="/join" style={{ fontSize: '20px', color: 'white' }}>Join</Nav.Link>
    </Nav>
  </Navbar>
);
}