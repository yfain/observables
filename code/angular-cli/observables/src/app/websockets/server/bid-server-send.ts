import * as express from "express";
import * as path from "path";
//import * as ws from "ws";
import {Server} from "ws";
import {Bid} from './bid'

const app = express();

app.use('/', express.static(path.join(__dirname,  '../../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));

// HTTP Server
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '..', 'client/simple_websocket_client.html'));

    res.sendFile(path.join(__dirname,  '../../client/bid_client.html'));
});

const httpServer = app.listen(8000, "localhost", () => {

    const {port} = httpServer.address();

    console.log('HTTP Server is listening on %s', port);
});

// WebSocket Server
var wsServer: Server = new Server({port:8085});

console.log('BidServer is listening on port 8085');

const OPEN = 1; // The ready state of WebSocket

let bidInterval;


// This code doesn't broadcast to all cliekts but generate different
// bids to each connected client
wsServer.on('connection',
           websocket => {
               websocket.on('message',

                      message => {

                          console.log("Server received: %s", message);

                          if (message == 'subscribe') {

                              // Start pushing bid notifications
                              bidInterval = setInterval(() => {

                                  if (websocket.readyState == OPEN) {
                                      websocket.send(generateBid());


                                  } else{
                                      console.log("client disconnected");
                                      // Stop pushing bid notifications
                                      clearInterval(bidInterval);
                                  }
                              }, 2000);
                          } else{
                              // Stop pushing bid notifications
                              console.log("client unsubscribed");
                              clearInterval(bidInterval);
                          }
                      });
           });

var generateBid = function(): string {
   let bid: Bid = new Bid();
   bid.amount = Math.random()*100;
   bid.bidTime = new Date();
   return JSON.stringify(bid);
}