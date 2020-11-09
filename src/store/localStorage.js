export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      let parsedStore = JSON.parse(serializedState);
      for(let i = 0; i < parsedStore.charges.length; i++){
        parsedStore.charges.map((el) => {
          return el.date = new Date(el.date)
         });
      }
      for(let i = 0; i < parsedStore.incomes.length; i++){
        parsedStore.incomes.map((el) => {
          return el.date = new Date(el.date)
         });
      }

      return parsedStore;
    } catch (err) {
      return undefined;
    }
  }; 
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
    }
  };