// Header component is a shared component because we can use this component in other section of the app

// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';

// Components
import Login from '../Login/Login';

// Using functional component because only need return jsx
const Header = () => (
  <>
    <header className={styles.header}>
      <h1>widget depot</h1>
      <Login />
    </header>
  </>
)

export default Header;
