export const NAVIGATION_PAGES = {
  Home: 'Home',
  TradeBook: 'TradeBook',
  Trades: 'Trades',
};

export const TRADE_BOOK_URL = 'wss://api-pub.bitfinex.com/ws/2'

export const TRADE_BOOK_REQ = {
  event: 'subscribe',
  channel: 'book',
  symbol: 'tBTCUSD',
};
