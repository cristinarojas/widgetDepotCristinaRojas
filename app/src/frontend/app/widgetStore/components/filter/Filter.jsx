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

  // Method to show the selected widget on widgetDetail Component
  selectedWidget = (id) => {
    const { filterWidgetDetails } = this.props;

    // Sending the filter widget selected id to the action creator
    filterWidgetDetails(id);
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
          {filteredWidgets.map((widget, index) => (
            <li onClick={() => this.selectedWidget(widget.id)} key={index}>
              <p>{widget.title} - <span>${widget.price}</span></p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Filter;
