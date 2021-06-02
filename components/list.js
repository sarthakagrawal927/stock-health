import { useContext } from "react";
import ListItem from "./listItem";
import { StocksContext } from "../contexts";

const List = () => {
  const stocks = useContext(StocksContext);
  console.log(stocks);
  if (stocks.length === 0) return <>Add stocks</>;
  return (
    <table className='table-auto bg-blue-200'>
      <thead>
        <tr>
          <th>Name</th> <th>ID</th>
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
  );
};

export default List;
