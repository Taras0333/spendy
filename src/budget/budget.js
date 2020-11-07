import React from 'react';
import './budget.scss';
import {connect} from "react-redux";

const mapState = (state) => {
    return state;
  }

export const BudgetView = (props) => {
    return (
        <div className="budget">
                <span className="budget-title">Бюджет:</span>
    <span className="budget-value">{props.UAHSymbol + props.budget}</span>           
        </div>
    )
}
export const Budget = connect(mapState, null)(BudgetView);