import { configureStore } from "@reduxjs/toolkit";
import tradeBookReducer from './tradeBook'
import tradesReducer from './trades'

export default configureStore({
  reducer: {
    TradeBook: tradeBookReducer,
    Trades: tradesReducer
  }
});