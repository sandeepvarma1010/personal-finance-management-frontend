import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransactionPage.css';

const TransactionPage = ({ onLogout }) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="transaction-page">
            <div className="header-container">
                <h2>Welcome to Your Dashboard</h2>
                <button className="logout-button" onClick={() => { onLogout(); navigate('/'); }}>Logout</button>
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
