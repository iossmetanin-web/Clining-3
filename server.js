#!/usr/bin/env node
process.env.HOSTNAME = '0.0.0.0';
process.chdir(require('path').join(__dirname, '.next', 'standalone'));
require('./server.js');
