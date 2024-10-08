import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionList from './TransactionList';

const TransactionListPage = ({ token }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    return (
        <div>
            <TransactionList token={token} />
            <button onClick={() => navigate('/transactions')} className="dashboard-button">
                Back to Dashboard
            </button>
        </div>
    );
};

export default TransactionListPage;
