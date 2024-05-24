import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const SideNavbar: React.FC = () => {
    return (
        <div className="side-navbar">
            <Nav className="flex-column">
                <LinkContainer to="/">
                    <Nav.Link to="/">TestLink1</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link to="/">TestLink2</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link to="/">TestLink3</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    );
}

export default SideNavbar;