import React, { useState } from 'react';
import { styled } from "styled-components";

const ProfileForm = ({ handleProfileSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    alternateMobile: '',
    residentialAddress: '',
    officeAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleProfileSubmit(formData);
  };

  return (
    <Wrapper>
    <article className='container w-50 mx-auto m-5 p-0'>
      <div className='p-5 py-4 bg-light'>
        <h2>Create Your Profile</h2>
      </div>
      <div className='px-5 py-3'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='fullName' className='form-label'>Full Name:</label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              value={formData.fullName}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='d-flex'>
            <div className='mb-3'>
              <label className='form-label'>Gender:</label>
              <div className='d-flex'>
                <div className='form-check'>
                  <input
                    type='radio'
                    id='male'
                    name='gender'
                    value='Male'
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className='form-check-input'
                  />
                  <label htmlFor='male' className='form-check-label'>Male</label>
                </div>
                <div className='form-check'>
                  <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='Female'
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className='form-check-input'
                  />
                  <label htmlFor='female' className='form-check-label'>Female</label>
                </div>
                <div className='form-check'>
                  <input
                    type='radio'
                    id='others'
                    name='gender'
                    value='Others'
                    checked={formData.gender === 'Others'}
                    onChange={handleChange}
                    className='form-check-input'
                  />
                  <label htmlFor='others' className='form-check-label'>Others</label>
                </div>
              </div>
            </div>
            <div className='ms-3 w-50'>
              <label htmlFor='dateOfBirth' className='form-label'>Date of Birth:</label>
              <input
                type='date'
                id='dateOfBirth'
                name='dateOfBirth'
                value={formData.dateOfBirth}
                onChange={handleChange}
                className='form-control'
                required
              />
            </div>
          </div>  
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='alternateMobile' className='form-label'>Alternate Mobile Number:</label>
            <input
              type='text'
              id='alternateMobile'
              name='alternateMobile'
              value={formData.alternateMobile}
              onChange={handleChange}
              className='form-control'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='residentialAddress' className='form-label'>Residential Address:</label>
            <textarea
              id='residentialAddress'
              name='residentialAddress'
              value={formData.residentialAddress}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='officeAddress' className='form-label'>Office Address:</label>
            <textarea
              id='officeAddress'
              name='officeAddress'
              value={formData.officeAddress}
              onChange={handleChange}
              className='form-control'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary'>Create Profile</button>
        </form>
      </div>  
    </article>
    </Wrapper>
  );
};

export default ProfileForm;

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


