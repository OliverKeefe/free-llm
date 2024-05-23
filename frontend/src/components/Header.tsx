import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark navbar-custom">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>Free LLM</Navbar.Brand>
                </LinkContainer>
            </Container>
        </Navbar>
    );
}

export default Header;
