import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => setShows(data))
  }, []);

  return (
    <div className="Box">
      <h1 className="TV-sow">TV Shows</h1>
      <div className="show-list">
        {shows.map(show => (
          <div className="show-item" key={show.id}>
            <h2 className="hih">{show.name}</h2>
            <img className="TV_iii" src={show.image?.medium} alt={show.name} />
            <button className="btn">Get Start Watch</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


