import { useState, useContext } from "react";
import { DispatchContext } from "../contexts";

const ListItem = ({ stock }) => {
  const [val, setVal] = useState(stock.quantity);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <span>{stock.name}</span>
      <span>{stock.id}</span>
      <input
        type='number'
        name={stock.id}
        id=''
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "UPDATE_QUANTITY",
            id: stock.id,
            newQuantity: val,
          });
        }}>
        Save
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_STOCK", id: stock.id });
        }}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
