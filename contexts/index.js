import React, { createContext, useReducer } from "react";
import stockReducer from "../reducers";

export const StocksContext = createContext();
export const DispatchContext = createContext();

const testData = [
  { id: 1, name: "Hi", key: "1", quantity: 3 },
  { id: 2, name: "H si", key: "2", quantity: 31 },
  { id: 3, name: "Hai", key: "3", quantity: 32 },
];

export function StocksProvider(props) {
  const [stocks, dispatch] = useReducer(stockReducer, testData);

  return (
    <StocksContext.Provider value={stocks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StocksContext.Provider>
  );
}
