import React, { useState } from 'react';
import axios from 'axios';

const alphbtns = {
  width: "35px",
  height: "35px",
  margin: "3px"
}

function AtoZ({ setSearchResults }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [activeLetter, setActiveLetter] = useState('');
  
  const handleButtonClick = async (letter) => {
    try {
      const response = await axios.get(`http://localhost:3210/getbyletter?l=${letter}`);
      setSearchResults(response.data);
      setActiveLetter(letter);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {alphabet.map((letter) => (
        <button
          key={letter}
          className={`btn btn-outline-dark ${activeLetter === letter ? 'active' : ''}`}
          style={alphbtns}
          onClick={() => handleButtonClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default AtoZ;

 