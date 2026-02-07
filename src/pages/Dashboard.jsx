import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const containerStyle = {
    padding: '40px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const statBox = {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.1)',
    flex: 1,
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '30px', textTransform: 'uppercase' }}>
        Admin Dashboard
      </h1>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <div style={statBox}>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>12</div>
          <div style={{ color: '#94a3b8', fontSize: '14px' }}>Live Updates</div>
        </div>
        <div style={statBox}>
          <div style={{ fontSize: '36px', fontWeight: 'bold' }}>5</div>
          <div style={{ color: '#94a3b8', fontSize: '14px' }}>Achievements</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button 
          onClick={() => navigate('/owner/post-update')}
          style={{ padding: '15px 30px', backgroundColor: '#0066FF', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          + Post New Update
        </button>
        <button style={{ padding: '15px 30px', backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Manage Existing Posts
        </button>
      </div>
    </div>
  );
};

export default Dashboard;