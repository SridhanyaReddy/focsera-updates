import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Admin Credentials: Goes to Admin Dashboard
    if (email === "admin@focsera.in" && password === "1234") {
      setUserRole('admin');
      localStorage.setItem('userRole', 'admin');
      navigate('/owner'); 
    } 
    // User Credentials: Goes to User Home
    else if (email === "user@focsera.in" && password === "0987") {
      setUserRole('user');
      localStorage.setItem('userRole', 'user');
      navigate('/'); 
    } else {
      alert("Unauthorized: Please check your credentials.");
    }
  };

  const s = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
    card: { backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', padding: '50px', borderRadius: '30px', width: '400px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.2)' },
    input: { width: '100%', padding: '15px', margin: '10px 0', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.3)', backgroundColor: 'transparent', color: 'white' },
    btn: { width: '100%', padding: '15px', backgroundColor: '#FFFFFF', color: '#0066FF', borderRadius: '50px', fontWeight: '900', marginTop: '20px' }
  };

  return (
    <div style={s.container}>
      <form style={s.card} onSubmit={handleLogin}>
        <h1 style={{ fontWeight: '900', marginBottom: '10px' }}>FOCSERA</h1>
        <p style={{ marginBottom: '30px', fontSize: '14px', opacity: 0.8 }}>Portal Authentication</p>
        <input style={s.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input style={s.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" style={s.btn}>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;