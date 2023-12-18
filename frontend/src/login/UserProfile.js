import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from "styled-components";

const UserProfile = ({ profileData }) => {
  function calculateAgeAndMonths(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    if (years === 0) {
      if (months === 1) {
        return `${months} Month`;
      } else {
        return `${months} Months`;
      }
    } else {
      if (months === 0) {
        if (years === 1) {
          return `${years} Year`;
        } else {
          return `${years} Years`;
        }
      } else {
        if (years === 1) {
          return `${years} Year, ${months} Months`;
        } else {
          return `${years} Years, ${months} Months`;
        }
      }
    }
  }

  return (
    <Wrapper>
      <div className='w-75 mx-auto'>
        {profileData && (
          <article className='container mx-auto m-5 p-0'>
              <div className='p-5 py-4 bg-light'>
                <h2>User Profile</h2>
              </div>
              <div className='d-flex p-5'>
                <div className="w-25">
                  <img style={{width: "200px"}} src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1696243855~exp=1696244455~hmac=864a53a5e882db94836225b4739dc0049618d5cdbf66eb5256a7d068a40f4875" alt="" />
                </div>
                <div className="w-75 px-5">
                  <div className='d-flex justify-content-between'>
                    <div className=''>
                      <h1 className="text-start fw-bold mb-0">{profileData.fullname}</h1>
                      <p> <strong>Age :</strong> { calculateAgeAndMonths(profileData.date_of_birth) } - <strong>{profileData.gender}</strong> </p>
                    </div>
                    <div>
                      <NavLink to="/edit-profile" className="nav-list">
                        <button className="btn btn-primary text-white">
                          <i className="fa-solid fa-pen-to-square text-white"></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>

                  <div>
                    <h6 className='bg-light border-top border-bottom py-2 mt-4'>Contact Details:</h6>
                    <p> <strong>Mobile Number :</strong> mobile_number </p>
                    <p> <strong>Email :</strong> { profileData.email } </p>
                    <p> <strong>Alternate Mobile Number :</strong> { profileData.alternate_mobile_number } </p>
                  </div>

                  <div>
                    <h6 className='bg-light border-top border-bottom py-2 mt-4'> Address </h6>
                    <p> <strong>Residential Address:</strong> { profileData.residential_address } </p>
                    <p> <strong>Office Address:</strong> { profileData.office_address } </p>
                  </div>
                  
                </div>
              </div>
            </article>
        )}
      </div>
    </Wrapper>
  );
};

export default UserProfile;

const Wrapper = styled.section`
article{
    margin: auto;
    background-image: 'url("/project-konnect/images/k-10.png")';
    background-size: "500px";
    background-position: "center center";
    background-repeat: "no-repeat";
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    border-radius: 10px;
}
`
