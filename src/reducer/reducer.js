const initialStore = {
    charges: [
       
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
        default:{
            return store
        } 

    }
}