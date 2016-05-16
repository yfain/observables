"use strict";
var express = require("express");
var path = require("path");
//import * as ws from "ws";
var ws_1 = require("ws");
var bid_1 = require('./bid');
var app = express();
app.use('/', express.static(path.join(__dirname, '../..')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));
// HTTP Server
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../bid_client.html'));
});
var httpServer = app.listen(8000, "localhost", function () {
    var port = httpServer.address().port;
    console.log('HTTP Server is listening on %s', port);
});
// WebSocket Server
var wsServer = new ws_1.Server({ port: 8085 });
console.log('BidServer is listening on port 8085');
var OPEN = 1; // The ready state of WebSocket
var bidInterval = setInterval(function () {
    var latestBid = generateBid();
    //console.log("The latest bid is: " + latestBid);
    broadcast(latestBid);
}, 1000);
var subscribers = [];
wsServer.on('connection', function (websocket) {
    websocket.on('message', function (message) {
        console.log("client sent %s", message);
        if (message == "subscribe") {
            subscribers.push(websocket);
        }
        else if (message == "unsubscribe") {
            // remove this client from subscribers
            subscribers.splice(subscribers.indexOf(websocket), 1);
        }
    });
});
function generateBid() {
    var bid = new bid_1.Bid();
    bid.amount = Math.random() * 100;
    bid.bidTime = new Date();
    return JSON.stringify(bid);
}
function broadcast(bid) {
    //wsServer.clients
    subscribers
        .forEach(function (client) {
        if (client.readyState == OPEN) {
            client.send(bid);
        }
        else {
            // client disconnected - remove it from subscribers
            subscribers.splice(subscribers.indexOf(client), 1);
        }
    });
}
