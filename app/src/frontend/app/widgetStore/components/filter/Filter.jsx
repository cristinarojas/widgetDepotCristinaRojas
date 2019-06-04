// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Filter.scss';

const Filter = () => (
  <>
    <section className={styles.containerFilter}>
      <input
        type="text"
        placeholder="Find the widget of your dreams"
        autoFocus />
        <i className={`fas fa-search`}></i>

      <ul className={styles.results}>
        <li>
          <p>Widget 1 - <span>$750</span></p>
        </li>
        <li>
          <p>Widget 2 - <span>$850</span></p>
        </li>
        <li>
          <p>Widget 3 - <span>$950</span></p>
        </li>
        <li>
          <p>Widget 4 - <span>$1000</span></p>
        </li>
      </ul>
    </section>
  </>
)

export default Filter;
