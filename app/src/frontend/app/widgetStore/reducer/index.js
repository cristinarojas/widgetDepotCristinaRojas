// Action Types
import {
  SHOW_WIDGET_DETAILS,
  FILTER_SELECTED_WIDGET
} from '../actions/actionTypes';

// Initial state
const initialState = {
  widgetSelected: 1,
  filterSelectedWidget: null
};

// Reducer
export default function widgetReducer(state = initialState, action) {
  switch (action.type) {

    case SHOW_WIDGET_DETAILS: {
      const { payload: widgetSelected } = action;

      return Object.assign({}, state, {
        widgetSelected
      });
    }

    case FILTER_SELECTED_WIDGET: {
      const { payload: filterSelectedWidget } = action;

      return Object.assign({}, state, {
        filterSelectedWidget
      });
    }

    default:
      return state;
  }
}
