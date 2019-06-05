// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Importing the Layout component to pass the Redux actions and state
import Layout from '../components/Layout';

// Importing Actions
import { showWidgetDetails } from '../actions';

const mapStateToProps = (state) => {
  return {
    selectedWidget: state.widget.selectedWidget
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    showWidgetDetails
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
