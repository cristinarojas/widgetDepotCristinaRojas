// Dependencies
import React, { Component, Fragment } from 'react';

// Styles
import styles from './WidgetDetail.scss';

class WidgetDetail extends Component {
  state = {
    counter: 0
  };

  handleAddWidget = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render() {
    // ES6 destructuring
    // Getting the widgetData and selected widget that I pass from Layout
    const { widgetData, selectedWidget } = this.props;

    // Filter the widgetData with the selected widget
    const singleWidget = widgetData.filter(w => w.id === Number(selectedWidget))[0];

    return (
      <>
        <section className={styles.detailContainer}>
          <section className={styles.cartTitle}>
            <h1 className={styles.title}>
              {singleWidget.title}
            </h1>
            <span className={styles.counter}>
              {this.state.counter}
            </span>
            <i
              className={`fas fa-cart-plus cart`}
              onClick={this.handleAddWidget}></i>
          </section>

          <figure className={styles.widgetImg}>
            <img
              src={`/images/${singleWidget.imageUrl}.jpg`}
              alt={singleWidget.title}/>
          </figure>

          <span className={styles.line}></span>

          <h2>Specifications</h2>
          <section className={styles.specifications}>
            <section className={styles.info}>
              <p>{singleWidget.dimensions}</p>
              <p>{singleWidget.weight}</p>
              <p>{singleWidget.capacity}</p>
            </section>

            <section className={styles.title}>
              <p>Dimensions</p>
              <p>Weight</p>
              <p>Capacity</p>
            </section>
          </section>

          <span className={styles.line}></span>

          <h2>Description</h2>

          <article className={styles.description}>
            <p>{singleWidget.description}</p>
          </article>
        </section>
      </>
    )
  }
}

export default WidgetDetail;
