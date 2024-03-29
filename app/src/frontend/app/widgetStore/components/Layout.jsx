// The Layout component handle all others components & hold Redux actions and state

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
import widgetData from './shared/data/widgetData';

const Layout = (props) => {
  // Getting the Redux action and state
  const { showWidgetDetails, selectedWidget } = props;

  return (
    <main className={styles.mainContainer}>
      <Header />
      <Filter
        widgetData={widgetData}
        showWidgetDetails={showWidgetDetails}
      />

      <section className={styles.content}>
        <Widget
          showWidgetDetails={showWidgetDetails}
          selectedWidget={selectedWidget}
          widgetData={widgetData}
        />

        <WidgetDetails
          selectedWidget={selectedWidget}
          widgetData={widgetData}
        />
      </section>
    </main>
  )
}

export default Layout;
