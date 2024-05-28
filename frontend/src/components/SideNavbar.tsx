import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const SideNavbar: React.FC = () => {
    return (
        <div className="side-navbar">
            <Nav className="flex-column">
                <LinkContainer to="/">
                    <Nav.Link>KVM Commands</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/settings">
                    <Nav.Link>Capital of Spain</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">
                    <Nav.Link>TestLink3</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    );
}

export default SideNavbar;