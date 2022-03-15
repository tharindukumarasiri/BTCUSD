import { configureStore } from "@reduxjs/toolkit";
import tradeBookReducer from './tradeBook'

export default configureStore({
  reducer: {
    TradeBook: tradeBookReducer
  }
});