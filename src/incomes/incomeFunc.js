import React, {useState} from 'react';
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

const IncomeFunction = (props) => {
    const [value, setValue] = useState('');

   function getIncome (e) {
       setValue(e.target.value);
    }
   function saveInc () {
        if(value !== ''){
        props.saveIncome(+value);
        setValue('');
    }
    }
    return(
        <div className="income-wrapper">
                <div className="income-list">
               {props.incomes.slice().reverse().slice(0, 7).map((el) => {
                   return(
                    <Income date={el.date} income={el.income}/>
                   )
               })}
                    <div className="input-wrapper">
                    <div className="each-input-wrapper">
                    </div>
                    <div className="each-input-wrapper">
                        <button className="button-save" onClick={saveInc}>Зберегти</button>
                    </div>
                    <div className="each-input-wrapper">
                        <input className="input" type="message" placeholder="Впиши суму" onChange={getIncome} value={value}></input>
                    </div>
                </div>     
                </div>
            </div>
    )
}

export const IncomeFunc = connect(mapState, mapDispatch)(IncomeFunction);