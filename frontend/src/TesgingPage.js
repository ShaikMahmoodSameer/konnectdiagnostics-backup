import React from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/actions/authActions';
import { useSelector } from 'react-redux';

function TesgingPage() {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(setAuth(true));
    };

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log(isAuthenticated);
    return (
      <div>
          <h1>Testing Page...</h1>
          <button onClick={handleLogin}> Login </button>
      </div>
    )
}

export default TesgingPage

