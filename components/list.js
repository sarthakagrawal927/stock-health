import { useContext, useEffect } from "react";
import ListItem from "./listItem";
import { StocksContext, DispatchContext } from "../contexts";

const List = () => {
  const stocks = useContext(StocksContext);
  const dispatch = useContext(DispatchContext);

  function saveToBackend() {
    fetch("/api/stock/", {
      method: "POST",
      body: JSON.stringify({ stocks: stocks }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        console.log("Success");
        return res.json();
      }
      res.json().then((data) => {
        throw new Error(data.message || "Something went wrong");
      });
    });
  }

  function getHealth() {
    fetch(process.env.NEXT_PUBLIC_REQ_URL, {
      method: "POST",
      body: JSON.stringify({ stocks: stocks }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.json().then((resp) => {
          dispatch({ type: "ADD_HEALTH", stocks: resp.data });
        });
      }
    });
  }

  if (!stocks || stocks?.length === 0) return <>Add stocks</>;
  return (
    <>
      {" "}
      <p>By {process.env.NEXT_PUBLIC_REQ_URL}</p>
      <table className='table-auto bg-blue-200'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Health</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <ListItem stock={stock} key={stock.id} />
          ))}
        </tbody>
      </table>
      <button onClick={saveToBackend}>Save to backend</button>
      <button onClick={getHealth}>Get Health</button>
    </>
  );
};

export default List;
