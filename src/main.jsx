import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index.jsx'
import '../styles/global.css'

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Index />} />
                </Routes>
            </Router>
        </React.StrictMode>
    );
} else {
    console.error('Failed to find the root element');
}
