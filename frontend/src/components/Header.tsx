import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownMenu from './DropdownMenu.tsx';
import { DropdownProvider } from "../context/DropdownContext.tsx";
import './../App.css';

const Header: React.FC = () => {

    const [message, setMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        setMessage(e.target.value);
    };

    return (
        <Navbar expand="lg" className="navbar-dark navbar-custom">
            <Container className="navbar-container" fluid>
                <DropdownProvider>
                    <DropdownMenu className="dropdown-menu"/>
                </DropdownProvider>
            </Container>

            <Container className="search-container">
                <InputGroup className="search-input">
                    <FormControl placeholder="Search"
                                 value={message}
                                 onChange={handleMessageChange}
                    />
                    <Button className="search-button" variant="primary" onClick={handleSend}>Search</Button>
                </InputGroup>
            </Container>

            <Container className="user-settings-container">
                <Button className="user-settings-btn">EL</Button>
            </Container>

        </Navbar>
    );
}

export default Header;
