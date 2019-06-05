// Action Types
import {
  SHOW_WIDGET_DETAILS,
  FILTER_SELECTED_WIDGET
} from '../actions/actionTypes';

// Initial state
const initialState = {
  selectedWidget: 1
};

// Reducer
export default function widgetReducer(state = initialState, action) {
  switch (action.type) {

    case SHOW_WIDGET_DETAILS: {
      const { payload } = action;

      return Object.assign({}, state, {
        selectedWidget: payload
      });
    }

    default:
      return state;
  }
}
