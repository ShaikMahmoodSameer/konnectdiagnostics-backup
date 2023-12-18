import React, { useEffect, useState } from 'react';

const EmailExistPopup = ({ isVisible }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      // Show the popup
      setVisible(true);

      // Set a timeout to hide the popup after 3 seconds
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      // Clear the timeout when the component unmounts or when isVisible becomes false
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className={`email-exist-popup ${visible ? 'visible' : 'hidden'}`}>
      Email already exists!
    </div>
  );
};

export default EmailExistPopup;
