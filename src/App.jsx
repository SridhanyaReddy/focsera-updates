import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Component Imports
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// Page & Admin Imports
import Home from './pages/home';
import Updates from './pages/updates';
import Achievements from './pages/Achievements';
import Login from './pages/Login';
import AdminDashboard from './admin/AdminDashboard';
import UpdateForm from './admin/UpdateForm';

function App() {
  // Initialize role as null to force login redirect if no session exists
  const [role, setRole] = useState(() => localStorage.getItem('userRole') || null);

  const appStyle = {
    minHeight: '100vh',
    // Focsera Official Blue Gradient
    background: 'radial-gradient(circle at center, #0066FF 0%, #001A33 100%)',
    color: '#FFFFFF',
    fontFamily: '"Inter", sans-serif',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  };

  return (
    <div style={appStyle}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: #001A33; }
        button { cursor: pointer; transition: all 0.2s ease; border: none; }
      `}</style>

      {/* Navbar only appears after successful login */}
      {role && <Navbar userRole={role} setUserRole={setRole} />}
      
      <main style={{ width: '100%', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          {/* Public Gateway: The only accessible route for new visitors */}
          <Route path="/login" element={<Login setUserRole={setRole} />} />

          {/* User Side: Protected from guest access */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
          <Route path="/updates" element={<ProtectedRoute><Updates /></ProtectedRoute>} /> 
          <Route path="/achievements" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />

          {/* Admin Side: Protected and restricted to 'admin' role */}
          <Route 
            path="/owner" 
            element={
              <ProtectedRoute allowRole="admin">
                <AdminDashboard setUserRole={setRole} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/owner/update-form" 
            element={
              <ProtectedRoute allowRole="admin">
                <UpdateForm />
              </ProtectedRoute>
            } 
          />
          
          {/* Strict Fallback: Any other path redirects to login or home based on role */}
          <Route path="*" element={<Navigate to={role ? "/" : "/login"} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;