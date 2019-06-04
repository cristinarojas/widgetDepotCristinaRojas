// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Login.scss';

const Login = () => {
  const loginImg = 'https://media.licdn.com/dms/image/C5603AQHkDPkqHrKD9w/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=iA5eYK8cI1vGT5x2PP3WLR5qjJ19h14ke1pXvXDJync';
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
