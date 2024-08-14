import React, { useState } from 'react'; // Corrected import: Removed useEffect
import { updateTransaction } from '../../services/api';
import './TransactionForm.css';

const UpdateTransactionForm = ({ token, transaction, onUpdate }) => {
    const [amount, setAmount] = useState(transaction.amount);
    const [type, setType] = useState(transaction.type);
    const [category, setCategory] = useState(transaction.category);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedTransaction = { amount, type, category };

        try {
            await updateTransaction(transaction._id, updatedTransaction, token);
            onUpdate(); // Call the onUpdate function passed from the parent to refresh the list
        } catch (error) {
            console.error('Error updating transaction:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <h3>Update Transaction</h3>
            <div className="amount-container">
                <span className="currency-symbol">$</span>
                <input
                    type="number"
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
            <button type="submit" className="add-transaction-button">Update Transaction</button>
        </form>
    );
};

export default UpdateTransactionForm;
