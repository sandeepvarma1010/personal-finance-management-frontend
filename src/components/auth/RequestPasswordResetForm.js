import React, { useState } from 'react';
import { requestPasswordReset } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const RequestPasswordResetForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await requestPasswordReset(email);
            setMessage(response.msg);
            setError('');
            navigate(`/reset-password/${response.token}`);
        } catch (err) {
            setError(err);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Request Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="button-container">
                    <button onClick={() => navigate('/')}>Back to Login</button>
                    <button type="submit">Send Reset Link</button>
                </div>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RequestPasswordResetForm;
