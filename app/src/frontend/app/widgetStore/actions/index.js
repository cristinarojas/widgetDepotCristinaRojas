// Importing action const types
import {
  SHOW_WIDGET_DETAILS
} from './actionTypes';

// Widget Action Creators
export const showWidgetDetails = payload => dispatch => {
  dispatch({
    type: SHOW_WIDGET_DETAILS,
    payload
  });
}
