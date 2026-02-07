import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/achievements')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="achievements-page">
      <div className="container">
        <div className="header-section">
          <h1>OUR <span>ACHIEVEMENTS</span></h1>
          <p>Celebrating milestones and successful project deliveries.</p>
        </div>

        {loading ? (
          <div className="loader">FETCHING MILESTONES...</div>
        ) : (
          <div className="achievement-grid">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item._id} className="achievement-card">
                  <div className="card-top">
                    {/* Focsera Blue for the Division/Tag */}
                    
                  </div>
                  
                  {/* Focsera Blue for the Heading */}
                  <h3 className="card-title">{item.title}</h3>
                  
                  {/* Grey for the Description */}
                  <p className="card-desc">{item.description}</p>
                  
                  <div className="card-footer">
                    <div className="footer-line"></div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No achievements recorded yet.</p>
            )}
          </div>
        )}
      </div>

      <style>{`
        .achievements-page {
          min-height: 100vh;
          background: #F1F5F9; /* Clean Light Grey Background */
          padding: 80px 20px;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .header-section h1 {
          font-size: 48px;
          font-weight: 900;
          color: #020817; /* Dark Grey/Black */
          margin: 0;
          letter-spacing: -1px;
        }

        .header-section h1 span {
          color: #0066FF; /* Focsera Blue */
        }

        .header-section p {
          color: #64748B; /* Medium Grey */
          font-size: 18px;
          margin-top: 15px;
        }

        .achievement-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .achievement-card {
          background: #FFFFFF; /* Pure White Card */
          padding: 35px;
          border-radius: 24px;
          border: 1px solid #E2E8F0; /* Subtle Grey Border */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .achievement-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.1);
          border-color: #0066FF;
        }

        .division-tag {
          color: #0066FF; /* Blue text */
          background: rgba(0, 102, 255, 0.1); /* Very Light Blue background */
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 15px;
        }

        .card-title {
          font-size: 24px;
          color: #0F172A; /* Dark Grey */
          margin: 0 0 15px 0;
          font-weight: 800;
          line-height: 1.2;
        }

        .card-desc {
          color: #64748B; /* Professional Grey description */
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          flex-grow: 1;
        }

        .card-footer {
          margin-top: 25px;
        }

        .footer-line {
          height: 4px;
          width: 40px;
          background: #0066FF; /* Accent Blue line */
          border-radius: 2px;
        }

        .loader {
          text-align: center;
          color: #0066FF;
          font-weight: 900;
          font-size: 20px;
          margin-top: 100px;
        }

        .no-data {
          text-align: center;
          grid-column: 1/-1;
          color: #94A3B8;
        }

        @media (max-width: 768px) {
          .header-section h1 { font-size: 36px; }
          .achievement-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Achievements;