import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Fridge from './components/fridge/fridge';
import Login from './components/login/login';

function App({FileInput, authService, itemRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService}/>
          </Route>
          <Route path="/fridge">
            <Fridge
              FileInput={FileInput}
              authService={authService}
              itemRepository={itemRepository}
            />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
