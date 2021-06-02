import produce from "immer";

const stockReducer = produce((draft, action) => {
  let index;
  switch (action.type) {
    case "ADD_STOCKS":
      for (let i = 0; i < action.stocks.length; i++) {
        draft.push(action.stocks[i]);
      }
      break;

    case "UPDATE_QUANTITY":
      index = draft.findIndex((stock) => stock.id === action.id);

      if (index !== -1) draft[index].quantity = action.newQuantity;

      break;

    case "DELETE_STOCK":
      index = draft.findIndex((stock) => stock.id === action.id);
      if (index !== -1) draft.splice(index, 1);
      break;
  }
});

export default stockReducer;