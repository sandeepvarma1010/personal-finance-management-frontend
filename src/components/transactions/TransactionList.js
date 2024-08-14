import React, { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../../services/api';
import TransactionChart from './TransactionChart'; // Ensure this path is correct
import UpdateTransactionForm from './UpdateTransactionForm'; // Import the new update form
import './TransactionList.css';

const TransactionList = ({ token }) => {
    const [transactions, setTransactions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [updatingTransaction, setUpdatingTransaction] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await getTransactions(token);
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error.response ? error.response.data : error.message);
            }
        };

        fetchTransactions();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await deleteTransaction(id, token);
            setTransactions(transactions.filter(transaction => transaction._id !== id));
            setErrorMessage('Transaction deleted successfully.');
        } catch (error) {
            console.error('Failed to delete transaction:', error);
            setErrorMessage('Failed to delete transaction.');
        }
    };

    const handleUpdateClick = (transaction) => {
        setUpdatingTransaction(transaction);
    };

    const handleUpdate = async () => {
        const response = await getTransactions(token);
        setTransactions(response.data);
        setUpdatingTransaction(null); // Close the update form after updating
    };

    return (
        <div className="transaction-list">
            {errorMessage && <div className="success-message">{errorMessage}</div>}
            <h3>Your Transactions</h3>
            {updatingTransaction ? (
                <UpdateTransactionForm
                    token={token}
                    transaction={updatingTransaction}
                    onUpdate={handleUpdate}
                />
            ) : (
                <>
                    <ul>
                        {transactions.map(transaction => (
                            <li key={transaction._id} className="transaction-item">
                                <span className={`transaction-text ${transaction.type?.toLowerCase()}`}>
                                    {transaction.type}: ${transaction.amount} - {transaction.category}
                                </span>
                                <div className="transaction-buttons">
                                    <button
                                        className="update-button"
                                        onClick={() => handleUpdateClick(transaction)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(transaction._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <TransactionChart transactions={transactions} />
                </>
            )}
        </div>
    );
};

export default TransactionList;
