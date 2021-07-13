import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Fridge from './components/fridge/fridge';
import Login from './components/login/login';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/fridge">
            <Fridge authService={authService}/>
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
