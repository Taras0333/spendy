import React, {Component} from 'react';
import {Charge} from './charges';
import {connect} from "react-redux";
import './charges.scss';
import {saveCharge} from '../actions/actions';

const mapState = (state) => {
    return state;
  }
  const mapDispatch = {
    saveCharge,
}

export class ChargesFunc extends Component{
    state={
        value: '',
        category: '',
    };

    getSum = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    saveCategory = (e) => {
        this.setState({
            category: e.target.value,
        })
    }
    saveSum = () => {
        if(this.state.value !== '' && this.state.category !== ''){
            this.props.saveCharge(+this.state.value, this.state.category);
            this.setState({
                value: '',
                category: '',
            })
        } 
    }
   
    render(){
        return(
        <div className="charges-wrapper">
            <div className="charges-list">
                <div className="discription-wrapper">
                    <div className="disc-wrapper">
                        <span className="disc">Тип</span>
                    </div>
                    <div className="disc-wrapper">
                        <span className="disc ">Дата</span>
                    </div>
                    <div className="disc-wrapper">
                        <span className="disc">Сума</span>
                    </div>
                    
                    
                   
                </div>
                
                {this.props.charges.reverse().slice(0, 7).map((el) => {
                    return(
                        <Charge type={el.type} date={el.date} charge={el.charge}/>
                    )
                })}
                <div className="input-wrapper">
                    <div className="each-input-wrapper">
                        <select type="select" className="select" onChange={this.saveCategory}>
                            <option selected disabled>Категорія</option>
                            <option>Їжа</option>
                            <option>Розваги</option>
                            <option>Транспорт</option>
                            <option>Комуналка</option>
                        </select>
                    </div>
                    <div className="each-input-wrapper">
                        <button className="button-save" onClick={this.saveSum}>Зберегти</button>
                    </div>
                    <div className="each-input-wrapper">
                        <input className="input" type="message" placeholder="Впиши суму" onChange={this.getSum} value={this.state.value}></input>
                    </div>
                    
                    
                   
                </div>
            </div>
        </div>
        )
    }
}

export const CashFlow = connect(mapState, mapDispatch)(ChargesFunc);