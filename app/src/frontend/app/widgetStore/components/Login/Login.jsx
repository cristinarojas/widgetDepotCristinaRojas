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
        <a href="https://github.com/cristinarojas" target="_blank">
          <img src={loginImg} alt={loginAlt} />
        </a>
      </picture>
    </>
  )
}

export default Login;
