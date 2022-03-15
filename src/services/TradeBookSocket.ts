import { TRADE_BOOK_REQ, TRADE_BOOK_URL } from '../utils/enum';
import { bookCreated, bookUpdated } from '../redux/tradeBook';
import store from '../redux/store';
import Toast from 'react-native-simple-toast';

const msgReq = JSON.stringify(TRADE_BOOK_REQ);
let w: any;

const TradeBookSocket = () => {
  if (!w) w = new WebSocket(TRADE_BOOK_URL);

  const connect = () => {
    try {
      w.onopen = () => {
        Toast.showWithGravity('Websocket Connected', Toast.LONG, Toast.TOP);
        w.send(msgReq);
      };
      w.onclose = (e: any) => {
        Toast.showWithGravity('Websocket Disconnected', Toast.LONG, Toast.TOP);
        w = undefined;
      };
      w.onerror = (e: any) => {
        console.log('on Error');
        console.log(e);
      };
      w.onmessage = (msg: any) => {
        const data = JSON.parse(msg.data)[1];

        if (!data || data == "hb") return;

        if (data.length == 50) {
          store.dispatch(bookCreated(data))
        } else if (data.length == 3) {
          store.dispatch(bookUpdated(data))
        }

      };
    } catch (e) {
      console.log(e);
    }
  };

  const disconnect = () => {
    try {
      console.log("Disconnected");
      store.dispatch(bookCreated([[]]))
      w.close();
      w = undefined;
    } catch (e) {
      console.log(e);
    }
  };

  return { connect, disconnect };
};

export default TradeBookSocket;
