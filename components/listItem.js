import { useState, useContext } from "react";
import { DispatchContext } from "../contexts";

const ListItem = ({ stock }) => {
  const [val, setVal] = useState(stock.quantity);
  const dispatch = useContext(DispatchContext);

  return (
    <tr>
      <td>{stock.name}</td>
      <td>
        <input
          type='number'
          min='1'
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
            dispatch({
              type: "UPDATE_QUANTITY",
              id: stock.id,
              newQuantity: e.target.value,
            });
          }}
        />
      </td>{" "}
      <td>{stock.health}</td>
      <td>
        <button
          onClick={() => {
            dispatch({ type: "DELETE_STOCK", id: stock.id });
          }}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
