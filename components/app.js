import List from "./list";
import Dropdown from "./dropdown";
import { StocksProvider } from "../contexts/";
const App = () => {
  return (
    <StocksProvider>
      <Dropdown />
      <List />
    </StocksProvider>
  );
};

export default App;
