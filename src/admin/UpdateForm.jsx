import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateForm = () => {
  const [title, setTitle] = useState('');
  const [division, setDivision] = useState('');
  const [description, setDescription] = useState('');
  const [postType, setPostType] = useState('updates');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔥 Use environment variable instead of hardcoding
  const BACKEND_URL = "http://localhost:3000";


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !division.trim() || !description.trim()) {
      alert('⚠️ Please fill all fields properly.');
      return;
    }

    if (!BACKEND_URL) {
      alert('❌ Backend URL not configured.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/${postType}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim(),
            category: division.trim(),
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to publish.');
      }

      alert('✅ Successfully Published!');

      // Reset form
      setTitle('');
      setDivision('');
      setDescription('');

      navigate('/owner');
    } catch (error) {
      console.error('Publish Error:', error);
      alert(`❌ ${error.message || 'Backend Error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="focsera-container">
      <form className="focsera-card" onSubmit={handleSubmit}>
        <div className="header">
          <h2>
            NEW <span>POST</span>
          </h2>
        </div>

        <div className="input-field">
          <label>CHOOSE</label>
          <select
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
          >
            <option value="updates">UPDATES</option>
            <option value="achievements">ACHIEVEMENTS</option>
          </select>
        </div>

        <div className="input-field">
          <label>HEADING</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label>DIVISION</label>
          <input
            type="text"
            placeholder="studios, events, web"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <label>DESCRIPTION</label>
          <textarea
            placeholder="Enter details here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="publish-btn"
          disabled={loading}
        >
          {loading ? 'SYNCING...' : 'PUBLISH NOW'}
        </button>
      </form>

      <style>{`
        .focsera-container {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0066FF;
          margin: 0;
          padding: 20px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .focsera-card {
          background: #F8FAFC;
          width: 100%;
          max-width: 450px;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .header {
          text-align: center;
        }

        .header h2 {
          font-size: 32px;
          font-weight: 900;
          color: #020817;
          margin: 0;
          letter-spacing: -1.5px;
        }

        .header h2 span {
          color: #0066FF;
        }

        .input-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-field label {
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .input-field input,
        .input-field select,
        .input-field textarea {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          font-size: 14px;
          color: #020817;
          outline: none;
          transition: all 0.2s;
        }

        .input-field input:focus,
        .input-field textarea:focus,
        .input-field select:focus {
          border-color: #0066FF;
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
        }

        .input-field textarea {
          height: 100px;
          resize: none;
        }

        .publish-btn {
          margin-top: 10px;
          background: #0066FF;
          color: white;
          border: none;
          padding: 16px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
        }

        .publish-btn:hover:not(:disabled) {
          background: #0052CC;
          transform: translateY(-2px);
        }

        .publish-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default UpdateForm;
