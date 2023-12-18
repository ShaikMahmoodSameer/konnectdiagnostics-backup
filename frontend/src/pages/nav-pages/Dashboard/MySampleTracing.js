import React from 'react';

function MySampleTracing() {
  const SampleStatus = ['Ordered', 'Sample Collected', 'Sample reached Cater', 'Testing on Sample', 'Report Available'];

  return (
    <div>
      <h1>My Sample Tracing</h1>
      <div className="progress-bar">
        {SampleStatus.map((status, index) => (
          <div key={index} className={`status ${index < SampleStatus.length - 1 ? 'completed' : 'current'}`}>
            <span className="status-icon">
              {index < SampleStatus.length - 1 ? (
                <i className="fas fa-check-circle"></i> // Use the appropriate icon here
              ) : (
                <i className="fas fa-hourglass-half"></i> // Use a different icon for the current status
              )}
            </span>
            <span className="status-text">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySampleTracing;
