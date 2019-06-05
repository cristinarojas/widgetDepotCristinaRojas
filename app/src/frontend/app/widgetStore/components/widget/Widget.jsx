// Dependencies
import React, { Component, Fragment } from 'react';

// Styles
import styles from './Widget.scss';

class Widget extends Component {
  // Using local state to control classes
  state = {
    active: false
  }

  // Method for show details
  handleDetails = (id) => {
    // Obtaining the action creator for use it
    const { showWidgetDetails } = this.props;

    // Sending the widget id to the action creator
    showWidgetDetails(id);

    // Updating local state
    this.setState({
      active: true
    })
  }

  render() {
    // ES6 destructuring
    // Obtaining data
    const { widgetData } = this.props;

    return (
      <>
        <section className={styles.widgets}>
          {
            widgetData.map((widget, index) => (
              <>
                <section
                  className={`${styles.widgetContainer} ${this.state.active ? styles.active  : ''}`}
                  key={`${widget.title}-${index}`}>
                  <section>
                    <h1 className={styles.title}>
                      {widget.title}
                    </h1>
                    <p className={styles.text}>
                      Price
                    </p>
                    <p className={styles.price}>
                      {`$ ${widget.price}`}
                    </p>
                  </section>

                  <i className={`fas fa-chevron-right`} onClick={() => this.handleDetails(widget.id, true)}></i>
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
