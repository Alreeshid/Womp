// AdminPanel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import { generateClient } from 'aws-amplify/data';

import { Flex, View, Text, Heading, Button, SearchField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

const client = generateClient();
let jwtToken;
jwtToken = event.requestContext.authorizer?.jwt?.claims?.['id_token']

if (!jwtToken) {
    const authHeader = event.headers['Authorization'];
    jwtToken = authHeader;
}
if (jwtToken) {
    console.log('jwtToken found:', jwtToken);
    // Use the jwtToken as needed
} else {
    console.log('jwtToken not found in the request');
}

const fetchUsers = async () => {
    const {data: users, errors} = await client.queries.listAllUsers({
        authMode: 'userPool',
        authToken: jwtToken
    })
}
try {
console.log(fetchUsers().list())
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
    //console.log(users)
}
/*
Thsi query seems to go through, but the console errors prompted seme inconsistent
*/

const fetchProducts = async() =>{
    const {data2: Products, errors2} = await client.models.Products.list();
};

const AdminPanel = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [detailView, setDetailView] = useState(null);
    
    // Navigation tabs configuration
    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: 'analytics' },
      { id: 'users', label: 'Users', icon: 'person' },
      { id: 'listings', label: 'Listings', icon: 'shopping_bag' },
      { id: 'support', label: 'Support', icon: 'help' },
      { id: 'settings', label: 'Settings', icon: 'settings' }
    ];
    
    // Handle opening detail view
    const openDetailView = (type, id, data) => {
      setDetailView({ type, id, data });
    };
    
    // Handle closing detail view
    const closeDetailView = () => {
      setDetailView(null);
    };
    
    // Render main content based on active tab
    const renderContent = () => {
      if (detailView) {
        return <DetailView type={detailView.type} id={detailView.id} data={detailView.data} onBack={closeDetailView} />;
      }
      
      switch (activeTab) {
        case 'dashboard':
          return <Dashboard />;
        case 'users':
          return <GridView 
            title="Users" 
            data={usersData} 
            type="user"
            onViewDetail={openDetailView} 
          />;
        case 'listings':
          return <GridView 
            title="Products" 
            data={listingsData} 
            type="listing"
            onViewDetail={openDetailView} 
          />;
        case 'support':
          return <GridView 
            title="Support Tickets" 
            data={ticketsData} 
            type="ticket"
            onViewDetail={openDetailView} 
          />;
        case 'settings':
          return <Settings />;
        default:
          return <Dashboard />;
      }
    };
    
    return (
      <Flex className="admin-portal">
        {/* Left Navigation */}
        <View className="nav-container">
          <View className="nav-header">
            <Text as="h1">Admin Portal</Text>
          </View>
          <Flex className="nav-items" direction="column">
            {navItems.map((item) => (
              <Flex
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setDetailView(null);
                }}
              >
                <span className="nav-icon material-icons">{item.icon}</span>
                <Text>{item.label}</Text>
              </Flex>
            ))}
          </Flex>
        </View>
        
        {/* Main Content Area */}
        <View className="content-container">
          {renderContent()}
        </View>
      </Flex>
    );
  };
  
  // Dashboard Component
  const Dashboard = () => {
    // Sample analytics data
    const stats = [
      { title: 'Active Users', value: '5,842', trend: +12.5, icon: 'person' },
      { title: 'Site Profits', value: '$28,461', trend: +8.2, icon: 'attach_money' },
      { title: 'Site Visitors', value: '24,895', trend: +15.3, icon: 'visibility' },
      { title: 'Orders', value: '382', trend: -2.8, icon: 'shopping_cart' },
      { title: 'Conversion Rate', value: '3.8%', trend: +0.5, icon: 'analytics' }
    ];
    
    return (
      <View className="dashboard">
        <Flex className="dashboard-header">
          <Heading level={4}>Dashboard</Heading>
          <Text>Last updated: {new Date().toLocaleString()}</Text>
        </Flex>
        
        {/* Stats Cards */}
        <View className="stats-container">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              icon={stat.icon}
            />
          ))}
        </View>
        
        {/* Chart Placeholders */}
        <View className="chart-container">
          <Heading level={5}>User Growth</Heading>
          <View className="chart-placeholder">
            <Text>[LINE CHART: Monthly User Growth]</Text>
          </View>
        </View>
        
        <Flex className="charts-row">
          <View className="chart-container" style={{ width: '48%' }}>
            <Heading level={5}>Revenue by Category</Heading>
            <View className="chart-placeholder">
              <Text>[BAR CHART: Revenue by Category]</Text>
            </View>
          </View>
          
          <View className="chart-container" style={{ width: '48%' }}>
            <Heading level={5}>Traffic Sources</Heading>
            <View className="chart-placeholder">
              <Text>[PIE CHART: Traffic Sources]</Text>
            </View>
          </View>
        </Flex>
      </View>
    );
  };
  
  // Stat Card Component
  const StatCard = ({ title, value, trend, icon }) => {
    const isTrendPositive = trend >= 0;
    
    return (
      <View className="stat-card">
        <Flex className="stat-header">
          <Text className="stat-title">{title}</Text>
          <span className="material-icons">{icon}</span>
        </Flex>
        
        <Text className="stat-value">{value}</Text>
        
        <Flex className={`stat-trend ${isTrendPositive ? 'trend-up' : 'trend-down'}`}>
          <span className="material-icons">
            {isTrendPositive ? 'trending_up' : 'trending_down'}
          </span>
          <Text>{Math.abs(trend)}% {isTrendPositive ? 'increase' : 'decrease'}</Text>
        </Flex>
      </View>
    );
  };
  
  // Grid View Component (reusable for Users, Listings, Support)
  const GridView = ({ title, data, type, onViewDetail }) => {
    const [searchQuery, setSearchQuery] = useState('');
    
    // Filter data based on search query
    const filteredData = data.filter(item => 
      Object.values(item).some(
        value => String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    
    return (
      <View className="grid-view">
        <Flex className="grid-header">
          <Heading level={4}>{title}</Heading>
          <SearchField
            className="search-bar"
            label={`Search ${title.toUpperCase()}`}
            placeholder={`Search ${title.toUpperCase()}`}
            hasSearchButton={true}
            hasSearchIcon={true}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Flex>
        
        {filteredData.length === 0 ? (
          <View style={{ padding: '20px', textAlign: 'center' }}>
            No {title.toLowerCase()} found matching your search.
          </View>
        ) : (
          <View className="grid-items">
            {filteredData.map(item => (
              <GridItem
                key={item.id}
                item={item}
                type={type}
                onClick={() => onViewDetail(type, item.id, item)}
              />
            ))}
          </View>
        )}
      </View>
    );
  };
  
  // Grid Item Component
  const GridItem = ({ item, type, onClick }) => {
    // Configure display based on item type
    let title, subtitle, details;
    
    switch (type) {
      case 'user':
        title = item.name;
        subtitle = item.email;
        details = [
          { label: 'Status', value: item.status },
          { label: 'Registered', value: item.registeredDate },
          { label: 'Orders', value: item.orderCount }
        ];
        break;
      case 'listing':
        title = item.name;
        subtitle = item.sku;
        details = [
          { label: 'Price', value: item.price },
          { label: 'Inventory', value: item.inventory },
          { label: 'Category', value: item.category }
        ];
        break;
      case 'ticket':
        title = item.subject;
        subtitle = `${item.status} - ${item.priority}`;
        details = [
          { label: 'Submitted By', value: item.submittedBy },
          { label: 'Date Opened', value: item.dateOpened },
          { label: 'Last Updated', value: item.lastUpdated }
        ];
        break;
      default:
        title = 'Unknown';
        subtitle = '';
        details = [];
    }
    
    return (
      <View className="grid-item" onClick={onClick}>
        <Flex className="grid-item-header">
          <Text className="grid-item-title">{title}</Text>
        </Flex>
        
        <Text className="grid-item-subtitle">{subtitle}</Text>
        
        <View className="grid-item-details">
          {details.map((detail, index) => (
            <Flex key={index} className="grid-item-detail">
              <Text className="detail-label">{detail.label}:</Text>
              <Text>{detail.value}</Text>
            </Flex>
          ))}
        </View>
      </View>
    );
  };
  
  // Detail View Component (reused for Users, Listings, Support)
  const DetailView = ({ type, id, data, onBack }) => {
    // Configure fields based on detail type
    let title, sections;
    
    switch (type) {
      case 'user':
        title = `User Details: ${data.name}`;
        sections = [
          {
            title: 'User Information',
            fields: [
              { label: 'Name', value: data.name },
              { label: 'Email', value: data.email },
              { label: 'Status', value: data.status },
              { label: 'Registration Date', value: data.registeredDate }
            ]
          },
          {
            title: 'Order History',
            fields: [
              { label: 'Total Orders', value: data.orderCount },
              { label: 'Total Spent', value: data.totalSpent }
            ]
          }
        ];
        break;
      case 'listing':
        title = `Product Details: ${data.name}`;
        sections = [
          {
            title: 'Product Information',
            fields: [
              { label: 'Product Name', value: data.name },
              { label: 'SKU', value: data.sku },
              { label: 'Price', value: data.price },
              { label: 'Inventory', value: data.inventory },
              { label: 'Category', value: data.category }
            ]
          },
          {
            title: 'Sales Information',
            fields: [
              { label: 'Total Sold', value: data.totalSold },
              { label: 'Average Rating', value: data.rating }
            ]
          }
        ];
        break;
      case 'ticket':
        title = `Support Ticket: ${data.subject}`;
        sections = [
          {
            title: 'Ticket Information',
            fields: [
              { label: 'Subject', value: data.subject },
              { label: 'Status', value: data.status },
              { label: 'Priority', value: data.priority },
              { label: 'Submitted By', value: data.submittedBy },
              { label: 'Date Opened', value: data.dateOpened },
              { label: 'Last Updated', value: data.lastUpdated }
            ]
          },
          {
            title: 'Ticket Description',
            content: data.description
          }
        ];
        break;
      default:
        title = 'Details';
        sections = [];
    }
    
    return (
      <View className="detail-view">
        <Button className="back-button" onClick={onBack}>
          <span className="material-icons" style={{ marginRight: '4px' }}>arrow_back</span>
          Back
        </Button>
        
        <Heading level={4}>{title}</Heading>
        
        <View className="detail-content">
          {sections.map((section, idx) => (
            <View key={idx} className="detail-section">
              <Heading level={5} className="detail-section-title">{section.title}</Heading>
              
              {section.fields && (
                <View>
                  {section.fields.map((field, fieldIdx) => (
                    <Flex key={fieldIdx} className="detail-field">
                      <Text className="detail-field-label">{field.label}</Text>
                      <Text className="detail-field-value">{field.value}</Text>
                    </Flex>
                  ))}
                </View>
              )}
              
              {section.content && (
                <View style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
                  <Text>{section.content}</Text>
                </View>
              )}
            </View>
          ))}
          
          <Flex justifyContent="space-between" marginTop="30px">
            <Button variation="primary">
              {type === 'user' ? 'Edit User' : type === 'listing' ? 'Edit Product' : 'Update Status'}
            </Button>
            <Button variation="destructive">
              {type === 'user' ? 'Deactivate Account' : type === 'listing' ? 'Remove Listing' : 'Close Ticket'}
            </Button>
          </Flex>
        </View>
      </View>
    );
  };
  
  // Settings Component
  const Settings = () => (
    <View className="settings-view">
      <Heading level={4}>Settings</Heading>
      <Text>Admin portal settings page</Text>
    </View>
  );
  
  // Sample Data
  const usersData = [
    {
      id: 'user1',
      name: 'John Smith',
      email: 'john.smith@example.com',
      status: 'Active',
      registeredDate: '2024-01-15',
      orderCount: 8,
      totalSpent: '$945.20'
    },
    {
      id: 'user2',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      status: 'Active',
      registeredDate: '2024-02-23',
      orderCount: 3,
      totalSpent: '$210.75'
    },
    {
      id: 'user3',
      name: 'Michael Rodriguez',
      email: 'mike.r@example.com',
      status: 'Inactive',
      registeredDate: '2023-11-05',
      orderCount: 12,
      totalSpent: '$1,256.40'
    },
    {
      id: 'user4',
      name: 'Lisa Chen',
      email: 'lisa.chen@example.com',
      status: 'Active',
      registeredDate: '2024-03-10',
      orderCount: 1,
      totalSpent: '$89.99'
    }
  ];
  
  const listingsData = [
    {
      id: 'prod1',
      name: 'Wireless Headphones',
      sku: 'ELC-WH100',
      price: '$89.99',
      inventory: 124,
      category: 'Electronics',
      totalSold: 842,
      rating: '4.7/5'
    },
    {
      id: 'prod2',
      name: 'Smart Watch Series 5',
      sku: 'ELC-SW500',
      price: '$249.99',
      inventory: 56,
      category: 'Electronics',
      totalSold: 378,
      rating: '4.5/5'
    },
    {
      id: 'prod3',
      name: 'Premium Cotton T-Shirt',
      sku: 'CL-TS200',
      price: '$24.99',
      inventory: 230,
      category: 'Clothing',
      totalSold: 1205,
      rating: '4.3/5'
    },
    {
      id: 'prod4',
      name: 'Stainless Steel Water Bottle',
      sku: 'HG-WB150',
      price: '$19.99',
      inventory: 175,
      category: 'Home Goods',
      totalSold: 920,
      rating: '4.8/5'
    }
  ];
  
  const ticketsData = [
    {
      id: 'ticket1',
      subject: 'Order Not Received',
      status: 'Open',
      priority: 'High',
      submittedBy: 'customer@example.com',
      dateOpened: '2024-03-10',
      lastUpdated: '2024-03-12',
      description: 'I placed order #12345 on March 5th but haven\'t received it yet. The tracking shows it was delivered but I never got it.'
    },
    {
      id: 'ticket2',
      subject: 'Wrong Size Delivered',
      status: 'In Progress',
      priority: 'Medium',
      submittedBy: 'jane.doe@example.com',
      dateOpened: '2024-03-08',
      lastUpdated: '2024-03-11',
      description: 'I ordered a medium shirt but received a small. I need to exchange it for the correct size.'
    },
    {
      id: 'ticket3',
      subject: 'Refund Request',
      status: 'Resolved',
      priority: 'Medium',
      submittedBy: 'robert.h@example.com',
      dateOpened: '2024-03-05',
      lastUpdated: '2024-03-09',
      description: 'I would like to request a refund for my purchase as the item is defective. Order #23456.'
    },
    {
      id: 'ticket4',
      subject: 'Website Login Issue',
      status: 'Open',
      priority: 'Low',
      submittedBy: 'tech.user@example.com',
      dateOpened: '2024-03-11',
      lastUpdated: '2024-03-11',
      description: 'I\'m unable to log into my account. When I enter my credentials, the page just refreshes without any error message.'
    }
  ];
  
  export default AdminPanel;