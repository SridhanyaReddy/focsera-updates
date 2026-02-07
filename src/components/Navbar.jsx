import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ userRole, setUserRole }) => {
  const navigate = useNavigate();

  // Reset function: Clicking the logo returns to User View and Home
  const handleLogoClick = () => {
    setUserRole("user"); 
    navigate('/'); 
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease'
  };

  const linkStyle = { 
    color: 'white', 
    textDecoration: 'none', 
    fontSize: '14px', 
    fontWeight: '600',
    transition: 'color 0.2s ease'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#0066FF',
    fontWeight: '800'
  };

  return (
    <nav style={navStyle}>
      {/* Brand Section: Logo + Text links to Home & Resets Role */}
      <div 
        onClick={handleLogoClick} 
        style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}
      >
        <img 
          src="/FocseraLogo.jpg" 
          alt="Focsera" 
          style={{ height: '45px', objectFit: 'contain' }} 
        />
        <span style={{ fontSize: '22px', fontWeight: '900', color: 'white', letterSpacing: '1px' }}>
          FOCSERA<span style={{ color: '#0066FF' }}>.</span>
        </span>
      </div>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {/* Conditional Rendering based on userRole */}
        {userRole !== 'admin' ? (
          <>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/updates" style={linkStyle}>Updates</Link>
            <Link to="/achievements" style={linkStyle}>Achievements</Link>
            
            {/* Login button: Redirects to the login form page */}
            <button 
              onClick={() => navigate('/login')}
              style={{ 
                backgroundColor: '#0066FF', 
                color: 'white', 
                border: 'none', 
                padding: '10px 22px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 102, 255, 0.3)'
              }}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <Link to="/owner" style={activeLinkStyle}>Admin Panel</Link>
            
            {/* Logout button: Resets state and sends to Home */}
            <button 
              onClick={() => { setUserRole('user'); navigate('/'); }}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                color: 'white', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                padding: '10px 20px', 
                borderRadius: '8px', 
                fontWeight: 'bold', 
                cursor: 'pointer' 
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;