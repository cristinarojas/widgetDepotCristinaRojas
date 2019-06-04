// The Layout component is the main component that holds all others components

// Dependencies
import React from 'react';

// Styles
import styles from './Layout.scss';

// Shared Components
import Header from './shared/Header';

// Components
import Filter from './Filter/Filter';
import Widget from './widget/Widget';
import WidgetDetails from './widgetDetail/WidgetDetail';

// Data widget details
import widgetDetails from './shared/data/widgetData';

const Layout = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Filter />

      <section className={styles.content}>
        <Widget widgetDetails = {widgetDetails} />
        <WidgetDetails />
      </section>
    </main>
  )
}

export default Layout;
