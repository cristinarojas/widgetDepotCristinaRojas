// Importing action const types
import {
  SHOW_WIDGET_DETAILS,
  FILTER_SELECTED_WIDGET
} from './actionTypes';

// Widget Action Creators
export const showWidgetDetails = payload => dispatch => {
  dispatch({
    type: SHOW_WIDGET_DETAILS,
    payload
  });
}

export const filterWidgetDetails = payload => dispatch => {
  dispatch({
    type: FILTER_SELECTED_WIDGET,
    payload
  });
}
