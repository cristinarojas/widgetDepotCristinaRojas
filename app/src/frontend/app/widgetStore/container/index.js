// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Importing the Layout component to pass the props and state
import Layout from '../components/Layout';

// Importing Actions
import { fetchWeather } from '../actions';

const mapStateToProps = (state) => {
  return {
    //weather: state.weather.weatherResult
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    fetchWeather
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
