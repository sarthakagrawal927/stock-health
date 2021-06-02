import { useState } from "react";
import Select from "react-select";
const data = require("../stock_data/test.json");

const Dropdown = () => {
  const [val, setVal] = useState();

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
          console.log(val);
          setVal("");
        }}>
        Add
      </button>
    </>
  );
};

export default Dropdown;
