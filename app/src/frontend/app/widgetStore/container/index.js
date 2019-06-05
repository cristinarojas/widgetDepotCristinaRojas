// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Importing the Layout component to pass the Redux actions and state
import Layout from '../components/Layout';

// Importing Actions
import { showWidgetDetails, filterWidgetDetails } from '../actions';

const mapStateToProps = (state) => {
  return {
    widget: state.widget.widgetSelected,
    widgetFilter: state.widget.filterSelectedWidget,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    showWidgetDetails,
    filterWidgetDetails
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
