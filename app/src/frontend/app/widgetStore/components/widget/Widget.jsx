// Dependencies
import React, { Component, Fragment } from 'react';

// Styles
import styles from './Widget.scss';

class Widget extends Component {
  // Using local state to control classes
  state = {
    activeWidget: 0
  }

  // Method for show details
  handleDetails = (id) => {
    // Obtaining the action creator for use it
    const { showWidgetDetails } = this.props;

    // Sending the widget id to the action creator
    showWidgetDetails(id);

    // Updating local state
    this.setState({
      activeWidget: Number(id)
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
              <section
                className={`
                  ${styles.widgetContainer}
                  ${this.state.activeWidget === widget.id ? styles.active  : ''}
                `}
                key={`${widget.title}-${index}`}
                onClick={() => this.handleDetails(widget.id)}
              >
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

                <i className={`fas fa-chevron-right`}></i>
              </section>
            ))
          }
        </section>
      </>
    )
  }
}

export default Widget;
