import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RequestPasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/forgot-password', { email });
            setMessage(response.data.msg);
            setError('');

            // Assuming you want to redirect to the reset-password page after the email is sent
            const token = response.data.token; // Assuming your backend returns the token
            navigate(`/reset-password/${token}`);
        } catch (err) {
            console.error('Error sending password reset request:', err.response || err.message);
            setError(err.response?.data?.msg || 'Error sending password reset request.');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Request Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RequestPasswordResetForm;
