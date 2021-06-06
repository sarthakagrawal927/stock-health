import { useContext, useEffect } from "react";
import ListItem from "./listItem";
import { StocksContext } from "../contexts";

const List = () => {
  const stocks = useContext(StocksContext);

  function handleSave() {
    fetch("/api/stock/", {
      method: "POST",
      body: JSON.stringify({ stocks: stocks }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) return res.json();
      res.json().then((data) => {
        throw new Error(data.message || "Something went wrong");
      });
    });
  }

  function getData() {
    fetch(process.env.NEXT_PUBLIC_REQ_URL, {
      method: "POST",
      body: JSON.stringify({ stocks: stocks }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then(resp => {
          console.log(resp); 
        })
      }
    });
  }

  if (stocks.length === 0) return <>Add stocks</>;
  return (
    <>
      {" "}
      <p>By {process.env.NEXT_PUBLIC_REQ_URL}</p>
      <table className='table-auto bg-blue-200'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th> <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {stocks.map((stock) => (
            <ListItem stock={stock} key={stock.id} />
          ))}
        </tbody>
      </table>
      <button onClick={handleSave}>Save to backend</button>
      <button onClick={getData}>Get Health</button>
    </>
  );
};

export default List;
