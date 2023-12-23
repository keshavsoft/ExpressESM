// let CommonForWebSocketStart = require("./Projects/KWSServer/EntryFile");
import { StartFunc as StartFuncPortListen } from "./PortListen.js";

// require('dotenv').config();

// const express = require('express');
import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';


// const http = require('http');
const app = express();
// var path = require('path');
// var cookieParser = require('cookie-parser');
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '3000');

app.use(cookieParser());

app.get('/', (req, res) => {
    res.json("kk")
});

app.use('/', express.static(path.join(path.resolve(), 'public')))

app.use(express.json({ limit: '100mb' }));

// CommonForWebSocketStart(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
