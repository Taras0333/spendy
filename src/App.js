import React from 'react';
import './App.scss';
import {Budget} from './budget/budget';
import {Buttons} from './buttons/buttons';
import {CashFlow} from './charges/chargesFunc';
import {store} from './store/store';
import {Provider} from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Budget />
        <Buttons />
        <CashFlow />
      </div>
    </Provider>
  );
}

export default App;
