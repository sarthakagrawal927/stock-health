import { useState } from "react";

const ListItem = ({ stock }) => {
  const [val, setVal] = useState(stock.quantity);
  return (
    <div>
      <span>{stock.name}</span>
      <span>{stock.key}</span>
      <input
        type=''
        name={stock.key}
        id=''
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button>Save</button>
    </div>
  );
};

export default ListItem;
