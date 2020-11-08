import React from 'react';
import {connect} from 'react-redux';

const mapState = (state) => {
    return state;
  }

export const Income = (props) => (
    <div className="each-charge">
        <div className="charge-type">
            <span className="each-data">Дохід</span>
        </div>
        <div className="charge-date">
            <span className="each-data"></span>
        </div>
        <div className="charge-charge">
            <span className="each-data"></span>
        </div>
    </div>
);

