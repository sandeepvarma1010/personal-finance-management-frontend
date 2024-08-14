import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransactionPage.css';

const TransactionPage = ({ onLogout }) => {
    const navigate = useNavigate(); 
    const location = useLocation(); 

    return (
        <div className="transaction-page">
            <h2 className="dashboard-header">Welcome to Your Dashboard</h2>
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
                <button onClick={onLogout} className="dashboard-button">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default TransactionPage;
