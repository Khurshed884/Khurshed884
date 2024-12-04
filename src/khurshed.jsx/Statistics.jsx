import React from 'react';
import "../Style/App.css"


function Statistics({ stats }) {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <ul>
        <li>Total Users: {stats.totalUsers}</li>
        <li>Active Users: {stats.activeUsers}</li>
        <li>New Signups: {stats.newSignups}</li>
      </ul>
      <div className="progress-bar">
        <label>Active User Percentage: {stats.activePercentage}%</label>
        <div
          style={{
            width: '100%',
            background: '#ddd',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${stats.activePercentage}%`,
              background: 'green',
              height: '10px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
