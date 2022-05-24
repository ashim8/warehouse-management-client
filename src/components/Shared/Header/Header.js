import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/warehouse.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <p className='mt-3 text-white'>AK Warehouse</p>
                        <Nav className="me-auto">
                            {/* <Nav.Link href="home">Home</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to ="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            {
                                user && <>
                                <Nav.Link as={Link} to="addproduct">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                                <Nav.Link as={Link} to="items">My Item</Nav.Link>
                        
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;