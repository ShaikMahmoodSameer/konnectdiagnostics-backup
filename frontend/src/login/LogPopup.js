import React from 'react';
import OtpLogin from './OtpLogin'

function LogPopup({ isShowLogin, handleLoginClick }) {
  return (
    <div className={`${isShowLogin ? "active" : ""} show popupbox mx-auto w-100 h-100 d-flex align-items-center justify-content-center`}>
      <OtpLogin handleLoginClick={handleLoginClick} />
    </div>
  )
}
export default LogPopup