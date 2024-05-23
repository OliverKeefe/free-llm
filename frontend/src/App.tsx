import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; // Ensure correct import

// Routes
const Home: React.FC = () => <div>Home</div>;
const Settings: React.FC = () => <div>Settings</div>;
const SpeechSettings: React.FC = () => <div>Speech</div>;
const DisplaySettings: React.FC = () => <div>Display</div>;
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container className='main-container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/settings/Speech" element={<SpeechSettings />} />
                    <Route path="/settings/Display" element={<DisplaySettings />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
