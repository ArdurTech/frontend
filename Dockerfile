# Use the official Node.js image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the static files
RUN npm install -g serve

# Expose port 5000 (default port for serve)
EXPOSE 5000

# Start the web server
CMD ["serve", "-s", "dist", "-l", "5000"]
