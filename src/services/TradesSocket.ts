import { TRADES_REQ, TRADE_BOOK_URL } from '../utils/enum';
import { tradesCreated, tradesUpdated } from '../redux/trades';
import store from '../redux/store';
import Toast from 'react-native-simple-toast';

const msgReq = JSON.stringify(TRADES_REQ);
let w: any;

const TradesSocket = () => {
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
                const data = JSON.parse(msg.data);
                if (data[1]?.length == 30) {
                      store.dispatch(tradesCreated(data[1]))
                } else if (data[2]?.length == 4) {
                      store.dispatch(tradesUpdated(data[2]))
                }

            };
        } catch (e) {
            console.log(e);
        }
    };

    const disconnect = () => {
        try {
            console.log("Disconnected");
            store.dispatch(tradesCreated([[]]))
            w.close();
            w = undefined;
        } catch (e) {
            console.log(e);
        }
    };

    return { connect, disconnect };
};

export default TradesSocket;
