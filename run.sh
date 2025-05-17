#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Start backend
echo "Starting backend at http://localhost:3001..."
npm run server &
BACKEND_PID=$!

# Start frontend
echo "Starting frontend at http://localhost:5173..."
npm run dev &
FRONTEND_PID=$!

# Cleanup function to kill child processes on exit
cleanup() {
  echo "Shutting down servers..."
  kill $BACKEND_PID $FRONTEND_PID
  exit
}
trap cleanup SIGINT SIGTERM

# Wait for backend and frontend processes
wait $BACKEND_PID $FRONTEND_PID
