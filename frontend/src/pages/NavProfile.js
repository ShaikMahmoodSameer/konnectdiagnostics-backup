import React from 'react';

function NavProfile({
    auth, 
    userId, 
    userName, 
    cartId, 
    message, 
    handleLoginClick,
    handleLogout,
  }) {
  return (
    <div>
        {auth ? (
            <div className='d-flex'>
                <h3><span>{userId}</span> <span>{userName}</span> <span>{cartId}</span> </h3>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
            ) : (
            <div className='d-flex'>
              <h3>{message}</h3>
              {/* <h3>Login</h3> */}
              <button className='btn btn-primary' onClick={handleLoginClick}>Login</button>
            </div>
        )}
    </div>
  )
}

export default NavProfile
