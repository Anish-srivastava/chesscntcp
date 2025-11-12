#!/bin/bash

# Install serve globally
npm install -g serve

# Serve the build folder
serve -s build -p $PORT