import React from 'react';
import Principal from './pages/Principal';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Principal} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
