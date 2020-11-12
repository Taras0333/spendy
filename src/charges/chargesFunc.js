import React, {useState} from 'react';
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
export const ChargesFunc = (props) => {
    
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

   function getSum (e) {
        setValue(e.target.value);
    }
   function saveCategory (e) {
        setCategory(e.target.value);
    }
    function saveSum () {
        if(value !== '' && category !== ''){
            props.saveCharge(+value, category);
            setValue('');
            setCategory('');
        } 
    }
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
                {props.charges.slice().reverse().slice(0, 7).map((el) => {
                    return(
                        <Charge type={el.type} date={el.date} charge={el.charge}/>
                    )
                })}
                <div className="input-wrapper">
                    <div className="each-input-wrapper">
                        <select type="select" className="select" onChange={saveCategory}>
                            <option selected disabled>Категорія</option>
                            <option>Їжа</option>
                            <option>Розваги</option>
                            <option>Транспорт</option>
                            <option>Комуналка</option>
                        </select>
                    </div>
                    <div className="each-input-wrapper">
                        <button className="button-save" onClick={saveSum}>Зберегти</button>
                    </div>
                    <div className="each-input-wrapper">
                        <input className="input" type="message" placeholder="Впиши суму" onChange={getSum} value={value}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const CashFlow = connect(mapState, mapDispatch)(ChargesFunc);