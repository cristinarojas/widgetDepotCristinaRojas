// Dependencies
import React, { Component } from 'react';

// Styles
import styles from './Filter.scss';

class Filter extends Component {
  state = {
    search: '',
    filteredWidgets: []
  }

  // Method for filter widgets by title
  handleChange = ({ target: { value } }) => {
    const { widgetData } = this.props;

    this.setState({
      search: value,
      filteredWidgets: value === '' ? [] : widgetData.filter(widget => widget.title.toLowerCase().includes(value.toLowerCase()))
    });
  }

  render() {
    const { filteredWidgets, search } = this.state;

    return (
      <section className={styles.containerFilter}>
        <input
          type="text"
          placeholder="Find the widget of your dreams"
          autoFocus
          onChange={this.handleChange}
          value={search}
        />

        <i className={`fas fa-search`} />

        <ul className={styles.results}>
          {filteredWidgets.map(widget => (
            <li>
              <p>{widget.title} - <span>${widget.price}</span></p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Filter;
