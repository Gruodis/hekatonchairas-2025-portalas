# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm ci --verbose

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# EXPOSE POTS
EXPOSE 3000

# Specify the command to start the React.js + Vite app
CMD ["npm", "run", "preview"]
