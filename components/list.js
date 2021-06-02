import { useContext } from "react";
import ListItem from "./listItem";
import { StocksContext } from "../contexts";

const List = () => {
  const stocks = useContext(StocksContext);
  console.log(stocks);
  if (stocks.length === 0) return <>Add stocks</>;
  return (
    <div>
      {stocks.map((stock) => (
        <ListItem stock={stock} key={stock.id} />
      ))}
    </div>
  );
};

export default List;
