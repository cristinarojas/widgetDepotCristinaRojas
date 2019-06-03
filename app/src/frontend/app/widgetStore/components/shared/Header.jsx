// Header component is a shared component because we can use this component in other section of the app.

// Dependencies.
import React, { Component, Fragment } from 'react';

// Styles.
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <p>I'm the header</p>
    )
  }
}

export default Header;
