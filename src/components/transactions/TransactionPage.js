import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransactionPage.css';

const TransactionPage = ({ onLogout }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const location = useLocation(); // Get location to access state

    return (
        <div className="transaction-page">
            <div className="dashboard-header">
                <h2>Welcome to Your Dashboard</h2>
                <button onClick={onLogout} className="logout-button">
                    Logout
                </button>
            </div>
            {location.state && location.state.message && (
                <div className="success-message">{location.state.message}</div>
            )}
            <div className="button-container">
                <button onClick={() => navigate('/add-transaction')} className="dashboard-button">
                    Add Transaction
                </button>
                <button onClick={() => navigate('/transaction-list')} className="dashboard-button">
                    Transaction List
                </button>
            </div>
        </div>
    );
};

export default TransactionPage;
