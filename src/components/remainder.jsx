import React from 'react';

const remainder = ({ text }) => {
  const style = {
    backgroundColor: 'rgba(0, 102, 255, 0.1)',
    borderLeft: '4px solid #0066FF',
    padding: '15px 20px',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '30px'
  };

  return (
    <div style={style}>
      <span style={{ fontSize: '18px' }}>🔔</span>
      {text}
    </div>
  );
};

export default remainder;