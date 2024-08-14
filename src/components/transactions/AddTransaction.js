import React from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionForm from './TransactionForm';

const AddTransaction = ({ token, onNewTransaction }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    return (
        <div>
            <h2>Add New Transaction</h2>
            <TransactionForm token={token} onNewTransaction={onNewTransaction} />
            <button onClick={() => navigate('/transactions')} className="dashboard-button">
                Back to Dashboard
            </button>
        </div>
    );
};

export default AddTransaction;
