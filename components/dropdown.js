import { useState, useContext, useEffect } from "react";
import Select from "react-select";
const data = require("../stock_data/test.json");

import { DispatchContext } from "../contexts";

const Dropdown = () => {
  useEffect(() => {
    fetch("/api/stock/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          dispatch({ type: "ADD_STOCKS", stocks: data.user?.stocks });
        });
      }
    });
  }, []);

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
          console.log(val);
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
                quantity: 1,
                id: stock.value,
                health: 0,
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
