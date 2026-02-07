import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ setUserRole }) => {
  const [updates, setUpdates] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resUpdates, resAchieve] = await Promise.all([
        fetch('http://localhost:3000/api/updates'),
        fetch('http://localhost:3000/api/achievements')
      ]);
      setUpdates(await resUpdates.json());
      setAchievements(await resAchieve.json());
      setLoading(false);
    } catch (err) {
      console.error("Dashboard Sync Error:", err);
      setLoading(false);
    }
  };

  const handleDelete = async (id, type) => {
    if (window.confirm(`Permanently delete this ${type.slice(0, -1)}?`)) {
      try {
        await fetch(`http://localhost:3000/api/${type}/${id}`, { method: 'DELETE' });
        fetchData(); // Refresh counts and lists
      } catch (err) {
        alert("Delete failed.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setUserRole('user');
    navigate('/login');
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '24px',
    padding: '30px',
    flex: 1
  };

  return (
    <div style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto', color: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: '900', textTransform: 'uppercase' }}>Portal Management</h1>
          <p onClick={handleLogout} style={{ color: 'white', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', marginTop: '5px' }}>
            ← LOGOUT & EXIT
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <button onClick={() => navigate('/owner/update-form')} style={{ padding: '12px 28px', backgroundColor: '#0066FF', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold' }}>
            + Create 
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '10px' }}>Updates</h2>
          <div style={{ fontSize: '48px', fontWeight: '800' }}>{updates.length}</div>
        </div>
        <div style={cardStyle}>
          <h2 style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '10px' }}>Achievements</h2>
          <div style={{ fontSize: '48px', fontWeight: '800' }}>{achievements.length}</div>
        </div>
      </div>

      {/* Management List */}
      <div style={{ ...cardStyle, flex: 'none' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '18px' }}>Active Content Management</h2>
        {loading ? <p>Loading Database...</p> : (
          <div>
            {[...updates.map(u => ({...u, type: 'updates'})), ...achievements.map(a => ({...a, type: 'achievements'}))].map(item => (
              <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#0066FF', fontWeight: 'bold', marginRight: '10px' }}>{item.type.toUpperCase()}</span>
                  <span>{item.title}</span>
                </div>
                <button onClick={() => handleDelete(item._id, item.type)} style={{ color: '#FF1744', background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>DELETE</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;