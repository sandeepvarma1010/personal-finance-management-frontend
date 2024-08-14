import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const registerUser = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (loginData) => {
    return await axios.post(`${API_URL}/login`, loginData);
};

export const getTransactions = async (token) => {
    return await axios.get(`${API_URL}/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const createTransaction = async (transactionData, token) => {
    return await axios.post(`${API_URL}/transactions`, transactionData, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const deleteTransaction = async (id, token) => {
    return await axios.delete(`${API_URL}/transactions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const updateTransaction = async (id, updatedTransaction, token) => {
    return await axios.put(`${API_URL}/transactions/${id}`, updatedTransaction, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const requestPasswordReset = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/forgot-password`, { email });
        return response.data;
    } catch (error) {
        console.error('Error sending password reset request:', error);
        throw error.response?.data?.msg || 'Error sending password reset request.';
    }
};

export const resetPassword = async (token, newPassword) => {
    try {
        const response = await axios.post(`${API_URL}/reset-password/${token}`, { password: newPassword });
        return response.data;
    } catch (error) {
        console.error('Error resetting password:', error);
        throw error.response?.data?.msg || 'Error resetting password.';
    }
};
