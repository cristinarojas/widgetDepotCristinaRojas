// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Login.scss';

const Login = () => {
  const loginImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0mh6TKEaEeOn2DzS02gBuCzEFmbAt4WUuxB-eEpM9gTq5xgBo';
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
