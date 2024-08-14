import React, { useState } from 'react';
import { resetPassword } from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await resetPassword(token, newPassword);
            setMessage(response.msg);
            setError('');
            navigate('/');
        } catch (err) {
            setError(err);
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <div className="button-container">
                    <button onClick={() => navigate('/')}>Back to Login</button>
                    <button type="submit">Reset Password</button>
                </div>
            </form>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ResetPasswordForm;
