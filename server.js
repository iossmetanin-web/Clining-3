// Onreza-compatible server wrapper for Next.js standalone
const { spawn } = require('child_process');
const path = require('path');

// Set required environment
process.env.HOSTNAME = '0.0.0.0';
process.env.PORT = process.env.PORT || '3000';

console.log(`Starting server on ${process.env.HOSTNAME}:${process.env.PORT}`);

// Change to standalone directory and run
process.chdir(path.join(__dirname, '.next', 'standalone'));

// Require the Next.js server
require('./server.js');
