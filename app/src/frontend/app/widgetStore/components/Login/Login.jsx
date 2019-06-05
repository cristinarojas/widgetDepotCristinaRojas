// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Login.scss';

const Login = () => {
  const loginImg = '/images/profile.jpeg';
  const loginAlt = 'Profile Login';
  return (
    <>
      <picture
        className={styles.login}>
        <img src={loginImg} alt={loginAlt} />
      </picture>
    </>
  )
}

export default Login;
