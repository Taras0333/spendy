import React from 'react';
import './incomes.scss';
import {connect} from "react-redux";

const mapState = (state) => {
    return state;
  }

 const EachIncome = (props) => (
    <div className="each-income">
        <div className="income-type">
            <span className="each-data">Дохід</span>
        </div>
        <div className="income-date">
            <span className="each-data">{props.date.toLocaleDateString("ua") + ' ' + props.date.toLocaleTimeString("ua")}</span>
        </div>
        <div className="income-income">
            <span className="each-data">{'+' + ' ' + props.UAHSymbol + props.income}</span>
        </div>
    </div>
);

export const Income = connect(mapState, null)(EachIncome);