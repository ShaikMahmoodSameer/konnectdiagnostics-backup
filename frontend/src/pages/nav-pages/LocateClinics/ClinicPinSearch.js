import React from 'react';

function ClinicPinSearch({ handlePinCodeSearch, pinSearchTerm, setPinSearchTerm }) {

  const searchInpStyle = {
    borderRadius: "5px 0 0 5px",
    border: "2px solid #005BAB"
  }
  
  return (
    <div className='w-100'>
      <div className="d-flex mb-2">
        <div className="form-outline w-100 d-flex">
          <input
            type="text" className="form-control" style={searchInpStyle} placeholder='Pincode ex. 500016'
            value={pinSearchTerm} onChange={(e) => { setPinSearchTerm(e.target.value) }}
          />
          <button 
            type="button" 
            className="btn btn-primary btn-sm text-white searchBtnStyle" 
            style={{ borderRadius: "0 5px 5px 0" }} 
            onClick={handlePinCodeSearch}>
              <i className="fas fa-search text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClinicPinSearch;
