import React from 'react';
import axios from 'axios';
import ProfileForm from './ProfileForm';
import UserProfile from './UserProfile';

const Profile = ({ userId, auth, profileData, showProfileForm, setShowProfileForm, setProfileData }) => {
  axios.defaults.withCredentials = true;

  const handleProfileSubmit = async (formData) => {
    try {
      const response = await axios.post(`http://localhost:3210/profile/${userId}`, formData);
      if (response.data.profileAdded) {
        setProfileData(response.data.profileData);
        setShowProfileForm(false);
        window.location.reload();
      } else {
        console.log(response.data.error);
      }
    } catch (err) {
      console.error("Axios error:", err);
    }
  };

  return (
    <div className='container'>
      {showProfileForm ? (
        <ProfileForm handleProfileSubmit={handleProfileSubmit} />
      ) : (
        auth && profileData && Object.keys(profileData).length > 0 ? (
          <UserProfile profileData={profileData} />
        ) : null
      )}
        {/* <ProfileForm handleProfileSubmit={handleProfileSubmit} /> */}
    </div>
  );  
};

export default Profile;


