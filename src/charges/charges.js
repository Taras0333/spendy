import React from 'react';
import './charges.scss';
import {connect} from "react-redux";

const mapState = (state) => {
    return state;
  }

export const EachCharge = (props) => (
    <div className="each-charge">
        <div className="charge-type">
            <span className="each-data">{props.type}</span>
        </div>
        <div className="charge-date">
            <span className="each-data">{props.date.toLocaleDateString("ua") + ' ' + props.date.toLocaleTimeString("ua")}</span>
        </div>
        <div className="charge-charge">
            <span className="each-data">{'-' + ' ' + props.UAHSymbol + props.charge}</span>
        </div>
        
    </div>
    )
export const Charge = connect(mapState, null)(EachCharge);