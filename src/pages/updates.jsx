import React, { useEffect, useState } from 'react';

const Updates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/updates');
      const data = await response.json();

      if (response.ok) {
        setUpdates(data);
      } else {
        setError(data.error || "Failed to fetch updates");
      }
    } catch (err) {
      setError("Backend connection error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="updates-container">
      <h2>Latest Updates</h2>

      {loading && <p>Loading updates...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && updates.length === 0 && (
        <p>No updates available.</p>
      )}

      <div className="updates-grid">
        {updates.map((update) => (
          <div key={update._id} className="update-card">
            <div className="category">{update.category}</div>
            <h3>{update.title}</h3>
            <p>{update.description}</p>
            <span className="date">
              {new Date(update.date).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .updates-container {
          min-height: 100vh;
          padding: 40px;
          background: linear-gradient(135deg, #001A33, #0066FF);
          font-family: Arial, sans-serif;
          color: white;
        }

        .updates-container h2 {
          text-align: center;
          margin-bottom: 30px;
        }

        .updates-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .update-card {
          background: white;
          color: #001A33;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          transition: 0.3s ease;
        }

        .update-card:hover {
          transform: translateY(-5px);
        }

        .update-card h3 {
          margin: 10px 0;
        }

        .category {
          font-size: 12px;
          font-weight: bold;
          color: #0066FF;
          text-transform: uppercase;
        }

        .date {
          display: block;
          margin-top: 10px;
          font-size: 12px;
          color: grey;
        }

        .error {
          text-align: center;
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Updates;
