// Dependencies
import { combineReducers } from 'redux';

// App Reducers
import widgetStore from '../../../frontend/app/widgetStore/reducer';

const rootReducer = combineReducers({
  widgetStore
});

export default rootReducer;
