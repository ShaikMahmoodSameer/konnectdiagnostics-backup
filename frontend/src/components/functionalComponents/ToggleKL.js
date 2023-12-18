import React, { useEffect, useState } from "react";
import LocateClinicGrid from "../../pages/nav-pages/LocateClinicGrid";
// import axios from "axios";
import apis from "../../api";

const ToggleKL = () => {
  const [clinicsdata, setClinicsdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apis.clinics;
        setClinicsdata(response.data);
      } catch (error) {
        console.error('Error fetching clinics data:', error);
      }
    };

    fetchData();
  }, []);

  return(
    <div className="px-md-5">
      <LocateClinicGrid clinicsdata={clinicsdata} noclinics={3} />
    </div>
  )
};

export default ToggleKL;

