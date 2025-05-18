#!/usr/bin/env bash

# Interactive test runner for the portfolio project

echo "Select a test option:"
echo "1) Run all tests"
echo "2) Run unit tests (.test.tsx)"
echo "3) Run integration tests (.test.ts)"
echo "4) Run coverage"
echo "5) Exit"

read -p "Enter choice [1-5]: " choice

case $choice in
  1)
    npx vitest run
    ;;
  2)
    npx vitest run tests/**/*.test.tsx
    ;;
  3)
    npx vitest run tests/**/*.test.ts
    ;;
  4)
    npx vitest run --coverage
    ;;
  5)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid choice: $choice"
    exit 1
    ;;
esac
