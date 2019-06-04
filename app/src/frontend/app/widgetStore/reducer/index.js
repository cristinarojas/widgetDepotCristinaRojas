// Action Types
import {
  SHOW_WIDGET_DETAILS
} from '../actions/actionTypes';

const initialState = {
  widgetSelected: 1
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {

    case SHOW_WIDGET_DETAILS: {
      const { payload: widgetSelected } = action;

      return Object.assign({}, state, {
        widgetSelected
      });
    }

    default:
      return state;
  }
}
