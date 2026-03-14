// Custom server for Onreza
process.env.HOSTNAME = '0.0.0.0';
process.env.PORT = process.env.PORT || '3000';

const path = require('path');
const fs = require('fs');

// Change to standalone directory
const standaloneDir = path.join(__dirname, '.next', 'standalone');
process.chdir(standaloneDir);

// Patch the server.js to listen on 0.0.0.0
const serverPath = path.join(standaloneDir, 'server.js');
let serverCode = fs.readFileSync(serverPath, 'utf8');

// Replace localhost with 0.0.0.0
serverCode = serverCode.replace(/localhost/g, '0.0.0.0');
fs.writeFileSync(serverPath, serverCode);

console.log(`Starting server on 0.0.0.0:${process.env.PORT}`);

// Now require the patched server
require('./server.js');
