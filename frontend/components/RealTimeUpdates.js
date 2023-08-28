import React, { useState, useEffect } from 'react';

const RealTimeUpdates = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch real-time updates from the server
    const fetchData = async () => {
      try {
        const response = await fetch('/api/realtime');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching real-time updates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Real-Time Updates</h2>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RealTimeUpdates;