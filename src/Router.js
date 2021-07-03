import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import signLogin from './components/screen/signLogin';
import Mainscreen from './components/screen/Mainscreen';

import App from './App';

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/mainscreen" component={Mainscreen} />
      <Route exact path="/" component={signLogin} />
    </Switch>
  </BrowserRouter>
);

export default Router;
