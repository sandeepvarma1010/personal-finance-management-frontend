import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransactionPage.css';

const TransactionPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="transaction-page">
            <h2>Welcome to Your Dashboard</h2>
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
