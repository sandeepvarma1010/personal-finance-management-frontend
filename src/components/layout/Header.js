import React from 'react';

const Header = ({ onLogout }) => {
    return (
        <header style={headerStyle}>
            <h1 style={{ flex: 1 }}>Personal Finance Management</h1>
            {onLogout && (
                <button style={logoutButtonStyle} onClick={onLogout}>
                    Logout
                </button>
            )}
        </header>
    );
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#333',
    color: '#fff',
    padding: '10px',
};

const logoutButtonStyle = {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default Header;
