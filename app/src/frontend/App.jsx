// Dependencies
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Importing container that have the widgetStore app
import WidgetStore from './app/widgetStore/container';

// Router 
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/widgetStore" component={WidgetStore} />
    </Switch>
  </BrowserRouter>
);

export default App;
