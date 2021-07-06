import React, { createContext, useReducer, useEffect, useState } from "react";
import stockReducer from "../reducers";

export const StocksContext = createContext();
export const DispatchContext = createContext();

export function StocksProvider(props) {
  const [stocks, dispatch] = useReducer(stockReducer, []);
  return (
    <StocksContext.Provider value={stocks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StocksContext.Provider>
  );
}
