import {TRADE_BOOK_REQ, TRADE_BOOK_URL} from '../utils/enum';

const msgReq = JSON.stringify(TRADE_BOOK_REQ);
let w: any;

const TradeBookSocket = () => {
  if (!w) w = new WebSocket(TRADE_BOOK_URL);

  const connect = () => {
    w.onopen = () => {
        console.log('on open');
      w.send(msgReq);
    };
    w.onclose = (e: any) => {
      console.log('on Close');
      console.log(e);
    };
    w.onerror = (e: any) => {
      console.log('on Error');
      console.log(e);
    };
    w.onmessage = (msg: any) => {
      console.log('on message');
      const data = JSON.parse(msg.data);
      // console.log(msg);
        console.log(data[1]);

      if (!data[1]) return;
    };
  };

  const disconnect = () => {
    w.close();
  };

  return {connect, disconnect};
};

export default TradeBookSocket;
