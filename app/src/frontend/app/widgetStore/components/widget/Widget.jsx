// Dependencies
import React, { Component, Fragment } from 'react';

// Styles
import styles from './Widget.scss';

class Widget extends Component {
  render() {
    const { widgetDetails: widgetDetails } = this.props;

    return (
      <>
        <section className={styles.widgets}>
          {
            widgetDetails.map((widget, index) => (
              <>
                <section className={styles.widgetContainer} key={`${widget.title}-${index}`}>
                  <section>
                    <h1 className={styles.title}>
                      {widget.title}
                    </h1>
                    <p className={styles.text}>
                      Price
                    </p>
                    <p className={styles.price}>
                      {widget.price}
                    </p>
                  </section>

                  <i className={`fas fa-chevron-right`}></i>
                </section>
              </>
            ))
          }
        </section>
      </>
    )
  }
}

export default Widget;
