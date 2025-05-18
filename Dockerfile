FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install JRE
RUN apt-get update && apt-get install -y openjdk-17-jre-headless && rm -rf /var/lib/apt/lists/*

# Copy all files
COPY . .

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
