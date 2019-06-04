// Dependencies
import React, { Component, Fragment } from 'react';

// Styles
import styles from './WidgetDetail.scss';

class WidgetDetail extends Component {
  render() {
    return (
      <>
        <section className={styles.detailContainer}>
          <section className={styles.cartTitle}>
            <h1 className={styles.title}>Title</h1>
            <i className={`fas fa-cart-plus cart`}></i>
          </section>

          <figure className={styles.widgetImg}>
            <img
              src="https://j7ujdu94de-flywheel.netdna-ssl.com/wp-content/uploads/2016/05/5120x2880-dark-blue-solid-color-background-500x281.jpg"
              alt="Widget 1"/>
          </figure>

          <span className={styles.line}></span>

          <h2>Specifications</h2>
          <section className={styles.specifications}>
            <section className={styles.info}>
              <p>info 1</p>
              <p>info 2</p>
              <p>info 3</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra nisi non erat facilisis, sed commodo tellus posuere. Proin sollicitudin odio sit amet eleifend auctor. Donec nunc turpis, condimentum a ullamcorper ac, suscipit eu odio. Maecenas ut turpis maximus, condimentum dui in, ornare mi. Vestibulum non lacus blandit, scelerisque libero vitae, mollis dui. Proin sit amet tortor interdum, interdum neque nec, bibendum enim. Phasellus pulvinar tempor diam at rutrum. Suspendisse fermentum nulla sit amet velit viverra, non euismod dui hendrerit. Vivamus tristique eu arcu ut pharetra.</p>
          </article>
        </section>
      </>
    )
  }
}

export default WidgetDetail;
