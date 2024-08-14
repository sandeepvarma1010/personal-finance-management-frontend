import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import TransactionPage from './components/transactions/TransactionPage';
import AddTransaction from './components/transactions/AddTransaction';
import TransactionListPage from './components/transactions/TransactionListPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [token, setToken] = useState('');

    // Check if token exists in localStorage on initial load
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const handleLogin = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken); // Save token to localStorage
    };

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token'); // Remove token from localStorage
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    {token ? (
                        <>
                            <Route path="/transactions" element={<TransactionPage onLogout={handleLogout} />} />
                            <Route path="/add-transaction" element={<AddTransaction token={token} />} />
                            <Route path="/transaction-list" element={<TransactionListPage token={token} />} />
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/" />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
