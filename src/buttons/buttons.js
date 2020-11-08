import React from 'react';
import './buttons.scss';
import {NavLink} from 'react-router-dom';

export const Buttons = () => {
    return(
        <div className="buttons-wrapper">
            <NavLink to="/" className="button">
                <button className="button">Видатки</button>
            </NavLink>
            <NavLink to="/incomes" className="button">
                <button className="button">Доходи</button>
            </NavLink>
            <NavLink to="/charts" className="button">
                <button className="button ">Графік</button>
            </NavLink>
        </div>
    )
}