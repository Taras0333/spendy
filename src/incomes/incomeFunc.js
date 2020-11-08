import React, {Component} from 'react';
import {Income} from './incomes';
import {connect} from 'react-redux';

const mapState = (state) => {
    return state;
  }
class IncomeFunction extends Component{


    render(){
        return(
            <div className="charges-wrapper">
                <div className="charges-list">
                    <Income />
                </div>
            </div>
        )
    }
};
export const IncomeFunc = connect(mapState, null)(IncomeFunction);