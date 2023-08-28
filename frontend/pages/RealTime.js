import React, { useState, useEffect } from 'react';

const RealTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch real-time data from backend API
    fetch('/api/realtime')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Real-Time Updates</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealTime;