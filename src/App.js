import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import TransactionPage from './components/transactions/TransactionPage';
import AddTransaction from './components/transactions/AddTransaction';
import TransactionListPage from './components/transactions/TransactionListPage';
import RequestPasswordResetForm from './components/auth/RequestPasswordResetForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const handleLogin = (newToken) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);  // Store token in localStorage
    };

    const handleLogout = () => {
        setToken('');
        localStorage.removeItem('token');  // Remove token from localStorage on logout
        window.location.href = "/"; // Redirect to the login page
    };

    return (
        <Router>
            <div className="App">
                <Header onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<RequestPasswordResetForm />} />
                    <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
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
