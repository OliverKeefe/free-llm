import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import SideNavbar from "./components/SideNavbar.tsx"; // Ensure correct import
import Chat from './components/Chat';
import { DropdownProvider } from './context/DropdownContext.tsx'
    '/context/DropdownContext';
import DropdownMenu from "./components/DropdownMenu";

type TestProps = {
    query: string;
    content: string;
}

// Routes
const Home: React.FC<TestProps> = ({ query, content }) => {
    return (
    <div className="TestProps">
        <p>User: {query}</p>
        <h2>{query}</h2>
        <p>{content}</p>
    </div>
    );
}

const Settings: React.FC = () => <div>Settings</div>;
const SpeechSettings: React.FC = () => <div>Speech</div>;
const DisplaySettings: React.FC = () => <div>Display</div>;
const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Container className='main-container'>
                <Header />
                <SideNavbar />
                <Routes>
                    <Route path="/" element={<Home query={'KVM, commands to switch VM from Bridge to NAT.'} content={"To switch a VM's network configuration from bridge mode to NAT in KVM (Kernel-based Virtual Machine), you need to follow these steps:\n" +
                        "\n" +
                        "    Shutdown the VM:\n" +
                        "    Ensure the virtual machine is turned off before making network changes."} />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/Speech" element={<SpeechSettings />} />
                    <Route path="/settings/Display" element={<DisplaySettings />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Chat></Chat>
            </Container>
        </BrowserRouter>
    );
}

export default App;
