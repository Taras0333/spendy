import React from "react";

export const saveCharge = (charge, category) => ({
    type: "SAVE_CHARGE",
    charge: charge,
    category: category,
});
export const saveIncome = (income) => ({
    type: "SAVE_INCOME",
    income: income,
});