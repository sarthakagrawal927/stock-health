import { useState, useContext } from "react";
import Select from "react-select";
const data = require("../stock_data/test.json");

import { DispatchContext } from "../contexts";

const Dropdown = () => {
  const [val, setVal] = useState();
  const dispatch = useContext(DispatchContext);

  return (
    <>
      {" "}
      <Select
        isMulti
        value={val}
        options={data}
        instanceId='some randomID'
        onChange={(event) => {
          console.log(event);
          setVal(event);
        }}
      />
      <button
        onClick={() => {
          if (val) {
            let stocks;
            stocks = val.map((stock) => {
              return {
                name: stock.label,
                quantity: 0,
                id: stock.value,
              };
            });
            dispatch({ type: "ADD_STOCKS", stocks: stocks });
            setVal("");
          } else alert("add stocks");
        }}>
        Add
      </button>
    </>
  );
};

export default Dropdown;
