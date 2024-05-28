import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Chat: React.FC = () => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = (handleMessageChange) => {
        setMessage(handleMessageChange);
    };

    return (
        <Container className="chatContainer">
            <Button className="chat-attach-button">A</Button>
            <InputGroup className="chatInput custom-chat-input">
                <FormControl placeholder="Enter your query here..."
                             value={message}
                             onChange={handleMessageChange}
                />
                <Button className="chat-button" variant="primary" onClick={handleMessageChange}>Send</Button>
            </InputGroup>
        </Container>
    );
};

export default Chat;