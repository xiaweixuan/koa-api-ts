#!/usr/bin/env node

import http from 'http';
import './path';
import app from './app';

const port = process.env.PORT || '8888';
const server = http.createServer(app.callback());

server.listen(port);
