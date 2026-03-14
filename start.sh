#!/bin/bash
cd .next/standalone
HOSTNAME=0.0.0.0 PORT=${PORT:-3000} node server.js
