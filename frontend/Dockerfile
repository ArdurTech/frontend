# Use an official Node runtime as a parent image
FROM node:16 AS build

# Set the working directory
WORKDIR /frontend

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the build
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /frontend /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
