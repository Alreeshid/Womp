// AdminPanel.jsx
import React, { useState } from 'react';
import './AdminPanel.css';

export default function AdminPanel(){
    const [selectedMenu, setSelectedMenu] = useState('dashboard');

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'users', label: 'Users', icon: '👥' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'reports', label: 'Reports', icon: '📈' }
    ];

    const renderContent = () => {
        switch(selectedMenu) {
            case 'dashboard':
                return <div className="content-section">Dashboard Content</div>;
            case 'users':
                return <div className="content-section">Users Management</div>;
            case 'settings':
                return <div className="content-section">Settings Panel</div>;
            case 'reports':
                return <div className="content-section">Reports and Analytics</div>;
            default:
                return <div className="content-section">Select a menu item</div>;
        }
    };

    return (
        <div className="admin-container">
            <header className="header">
                <h1>Admin Panel</h1>
                <div className="user-info">
                    <span>Welcome, Admin</span>
                    <button className="logout-btn">Logout</button>
                </div>
            </header>
            
            <div className="main-content">
                <nav className="sidebar">
                    <ul className="menu-list">
                        {menuItems.map(item => (
                            <li 
                                key={item.id}
                                className={`menu-item ${selectedMenu === item.id ? 'active' : ''}`}
                                onClick={() => setSelectedMenu(item.id)}
                            >
                                <span className="menu-icon">{item.icon}</span>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <main className="content">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

