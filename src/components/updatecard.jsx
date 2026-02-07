import React from 'react';

const updatecard = ({ title, description, category, date }) => {
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '20px',
    transition: 'transform 0.2s',
    textAlign: 'left'
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: category === 'achievement' ? '#0066FF' : 'rgba(255,255,255,0.2)',
    color: 'white',
    marginBottom: '12px'
  };

  return (
    <div style={cardStyle} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
         onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={badgeStyle}>{category}</span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>{date}</span>
      </div>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem', fontWeight: '700' }}>{title}</h3>
      <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.5', fontSize: '14px' }}>{description}</p>
    </div>
  );
};

export default updatecard;