import React from 'react';
import './App.scss';
import {Budget} from './budget/budget';
import {Buttons} from './buttons/buttons';
import {CashFlow} from './charges/chargesFunc';
import {store} from './store/store';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {IncomeFunc} from './incomes/incomeFunc';
import {ChartView} from './chart/chart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Budget />
          <Buttons />
          <Switch>
            <Route exact path="/">
              <CashFlow />
            </Route>
            <Route exact path="/incomes">
              <IncomeFunc />
            </Route>
            <Route exact path="/chart">
              <ChartView/>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
