#!/usr/bin/env bash

set -e

# Interactive runner for development and testing
echo "Select an option:"
echo "1) Start development servers"
echo "2) Run tests"
echo "3) Run coverage report"
echo "4) Exit"

read -p "Enter choice [1-4]: " choice

case "$choice" in
  1)
    echo "Starting development servers..."
    npm run dev:all
    ;;
  2)
    echo "Launching test menu..."
    ./run_tests.sh
    ;;
  3)
    echo "Running coverage report..."
    npx vitest run --coverage
    ;;
  4)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid choice: $choice"
    exit 1
    ;;
esac
