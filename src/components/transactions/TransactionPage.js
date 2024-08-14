import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TransactionPage.css'; // Ensure this is imported

const TransactionPage = ({ onLogout }) => {
    const navigate = useNavigate(); // Define the navigate function

    return (
        <div>
            <div className="transaction-page-header">
                <h2>Welcome to Your Dashboard</h2>
                <button onClick={onLogout} className="logout-button">
                    Logout
                </button>
            </div>
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
