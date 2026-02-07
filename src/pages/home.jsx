import React from 'react';

const home = () => {
  const EXTERNAL_URL = "https://focsera.in";

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '85vh',
    textAlign: 'center',
    padding: '0 20px',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    fontSize: 'clamp(48px, 8vw, 84px)', // Responsive font size
    fontWeight: '900',
    lineHeight: '1.1',
    letterSpacing: '-2px',
    margin: '0 0 20px 0',
    textTransform: 'uppercase'
  };

  const subtitleStyle = {
    color: '#94a3b8',
    fontSize: 'clamp(16px, 2vw, 20px)',
    maxWidth: '700px',
    lineHeight: '1.6',
    marginBottom: '40px'
  };

  const mainButtonStyle = {
    padding: '20px 50px',
    backgroundColor: '#0066FF', // Official Focsera Blue
    color: 'white',
    fontSize: '18px',
    fontWeight: '800',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 15px 30px rgba(0, 102, 255, 0.4)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none'
  };

  return (
    <div style={containerStyle}>
      {/* Brand Hero Section */}
      <h1 style={titleStyle}>
        FOCUS. CREATE.<br />
        <span style={{ color: '#0066FF' }}>CELEBRATE.</span>
      </h1>

      <p style={subtitleStyle}>
        The future of creativity is here. Join the Focsera ecosystem and 
        explore our world-class media and design divisions.
      </p>

      {/* Primary External Link Button */}
      <button 
        style={mainButtonStyle}
        onClick={() => window.open(EXTERNAL_URL, '_blank', 'noopener,noreferrer')}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-5px) scale(1.02)';
          e.target.style.backgroundColor = '#0052cc';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.backgroundColor = '#0066FF';
        }}
      >
        Visit Focsera.in
      </button>

      {/* Decorative Blur Element to enhance the radial gradient */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        width: '300px',
        height: '300px',
        background: 'rgba(0, 102, 255, 0.2)',
        filter: 'blur(100px)',
        zIndex: -1
      }}></div>
    </div>
  );
};

export default home;