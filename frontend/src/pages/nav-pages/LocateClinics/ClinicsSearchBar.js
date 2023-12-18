import React, { useState } from 'react';
import axios from 'axios';

function ClinicSearchBar({ setClinicsdata }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchInpStyle = {
    borderRadius: "5px",
    border: "2px solid #005BAB"
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3210/clinics/search?q=${searchTerm}`);
      setClinicsdata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=''>
      <div className="d-flex mb-2">
        <div className="form-outline w-100">
          <input 
            type="text" 
            className="clinicsearchinp form-control" 
            style={searchInpStyle} 
            placeholder='Search City / Area / Clinic Name...'
            value={searchTerm} 
            onChange={(e) => {handleSearch(); setSearchTerm(e.target.value)}}
          />
        </div>
      </div>
    </div>
  );
}

export default ClinicSearchBar;
