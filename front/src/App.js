import React, { useState } from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Chat/components/Main/Main";
import { store } from './Store';


export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
