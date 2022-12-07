import React from 'react'
import Logo from '../assets/brain23.png';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import useAuth from '../services/useAuth';

const Navmenu = () => {

    const { auth, setAuth } = useAuth();

    return (
        <Navbar bg="light" expand="lg" sticky='top'>
        <Container fluid>
            <Navbar.Toggle bsPrefix='navbar-toggler' aria-controls="offcanvasNavbar" className="border-0"/>
            <Navbar.Brand to='#'>
                <img
                    src={Logo}
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Posts"
                />
            </Navbar.Brand> 
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="link-primary" to="/"> Posts </NavLink>
                    <NavLink className="link-primary" to="/newpost"> New Post </NavLink>
                    { auth?.data?.access ? <NavLink className="link-primary mx-2" to="/" onClick={(e) => setAuth({})}>Logout</NavLink> : <NavLink className="link-primary mx-2" to="/login">Login</NavLink> }
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>
    )
}

export default Navmenu