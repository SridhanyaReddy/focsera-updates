import React from 'react';
import UpdateCard from './updatecard'; 

const UpdateList = ({ updates = [] }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: '850px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box'
  };

  const emptyStateStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    padding: '60px 20px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)'
  };

  return (
    <div style={containerStyle}>
      {updates.length > 0 ? (
        updates.map((item, index) => (
          <UpdateCard 
            key={item._id || index}
            title={item.title}
            description={item.description || item.content}
            category={item.category || item.type}
            date={item.date || "Just now"}
          />
        ))
      ) : (
        <div style={emptyStateStyle}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>📡</div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>
            No Updates Available
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '14px' }}>
            The feed is currently quiet. New announcements will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default UpdateList;