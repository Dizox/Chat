import React, { useState } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { store } from './Store';
import Main from "./Chat/components/Main/Main";
import Invite from "./Chat/components/Invite/Invite";


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <div className="App">
              <Main/>
            </div>
          </Route>

          <Route exact path='/invite' component={Invite} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
