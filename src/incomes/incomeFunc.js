import React, {Component} from 'react';
import {Income} from './incomes';
import {connect} from 'react-redux';
import './incomes.scss';
import {saveIncome} from '../actions/actions';

const mapState = (state) => {
    return state;
  }
  const mapDispatch = {
    saveIncome,
}
class IncomeFunction extends Component{
    state={
        value: '',
    };
    getIncome = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    saveInc = () => {
        if(this.state.value !== ''){
        this.props.saveIncome(+this.state.value);
        this.setState({
            value: '',
        })
    }
    }

    render(){
        return(
            <div className="income-wrapper">
                <div className="income-list">
               {this.props.incomes.reverse().slice(0, 7).map((el) => {
                   return(
                    <Income date={el.date} income={el.income}/>
                   )
               })}
                    <div className="input-wrapper">
                    <div className="each-input-wrapper">
                        
                    </div>
                    <div className="each-input-wrapper">
                        <button className="button-save" onClick={this.saveInc}>Зберегти</button>
                    </div>
                    <div className="each-input-wrapper">
                        <input className="input" type="message" placeholder="Впиши суму" onChange={this.getIncome} value={this.state.value}></input>
                    </div>
                    
                    
                   
                </div> 
                         
                </div>
            </div>
        )
    }
};
export const IncomeFunc = connect(mapState, mapDispatch)(IncomeFunction);