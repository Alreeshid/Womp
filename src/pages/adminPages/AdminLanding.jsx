// AdminPanel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import { generateClient } from 'aws-amplify/data';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

const client = generateClient();

const fetchUsers = async () => {
    const {data: users, errors} = await client.queries.listAllUsers({
        authMode: 'userPool'
    })
}
try {
console.log(fetchUsers())
if(errors){
    console.error(errors)
}
else if(data){
    console.log(data)
}
else{
    alert("No errors/data found")
}
}
catch{
    console.log("cannot list users?")
}

const fetchProducts = async() =>{
    const {data2: Products, errors2} = await client.models.Products.list();
};

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
                return <div className="content-section">User Management</div>;
            case 'settings':
                return <div className="content-section">Product Management</div>;
            case 'reports':
                return <div className="content-section">Sales and Analytics</div>;
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
                    <Link to="/"><button className="logout-btn">Logout</button> </Link>
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

