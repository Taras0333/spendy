const initialStore = {
    charges: [
       
    ],
    incomes: [

    ],
    UAHSymbol: '₴',
    budget: 1000,

}

export const reducer = (store = initialStore, action) => {
    switch(action.type){
        case "SAVE_CHARGE": {
            let stateCopy = {
                ...store,
                charges: [
                    ...store.charges,
                ],
                incomes: [
                    ...store.incomes,
                ],
                budget: store.budget - action.charge,
            }
            stateCopy.charges.push({
                    charge: action.charge,
                    date: new Date(),
                    type: action.category,})
            return{
                ...stateCopy,
                
            }
        }
        case "SAVE_INCOME": {
            let stateCopy = {
                ...store,
                charges: [
                    ...store.charges,
                ],
                incomes: [
                    ...store.incomes,
                ],
                budget: store.budget + action.income,
            }
            stateCopy.incomes.push({
                    income: action.income,
                    date: new Date(),
                    })
            return{
                ...stateCopy,
                
            }
        }
        default:{
            return store
        } 

    }
}