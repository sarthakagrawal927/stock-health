import List from "./list";
import Dropdown from "./dropdown";
import { StocksProvider } from "../contexts/";
const App = () => {
  return (
    <StocksProvider>
      <Dropdown />
      <List />
      <button>Save to backend</button>
      <button>Get Health</button>
    </StocksProvider>
  );
};

export default App;
