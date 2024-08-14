import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTransaction } from '../../services/api';
import './TransactionForm.css';

const TransactionForm = ({ token, onNewTransaction }) => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Income');
    const [category, setCategory] = useState('');
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted"); // Debugging log to see if the function is triggered

        const transactionData = { amount, type, category };
        console.log("Transaction Data:", transactionData); // Log the transaction data

        try {
            const response = await createTransaction(transactionData, token);
            console.log("Transaction successful:", response.data); // Log the response from the server

            if (onNewTransaction) {
                onNewTransaction(response.data);
            }

            setAmount('');
            setCategory('');

            // Redirect to the dashboard with a success message
            navigate('/transactions', { state: { message: 'Successfully added transaction!' } });
            console.log("Redirecting to dashboard"); // Log before redirecting
        } catch (error) {
            console.error('Error creating transaction:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <h3>Add New Transaction</h3>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span>$</span>
                </div>
                <input
                    type="number"
                    className="amount-input"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button type="submit" className="add-transaction-button">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
