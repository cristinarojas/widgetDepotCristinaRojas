// Dependencies
import { combineReducers } from 'redux';

// App Reducers
import widget from '../../../frontend/app/widgetStore/reducer';

// Combine the app reducers
const rootReducer = combineReducers({
  widget
});

export default rootReducer;
