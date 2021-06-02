import { useState, useContext } from "react";
import { DispatchContext } from "../contexts";

const ListItem = ({ stock }) => {
  const [val, setVal] = useState(stock.quantity);
  const dispatch = useContext(DispatchContext);

  return (
    <tr>
      <td>{stock.name}</td>
      <td>{stock.id}</td>
      <td>
        {" "}
        <input
          type='number'
          name={stock.id}
          id=''
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </td>
      <td>
        {" "}
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
      </td>
    </tr>
  );
};

export default ListItem;
