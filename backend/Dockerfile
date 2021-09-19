# Get node image
FROM node:latest

# Create backend app folder
WORKDIR /usr/src/mern-backend-app

# Copy package.json file from project source folder to container folder
COPY package*.json ./

# Install dependencies inside of the container
RUN npm install

# Copy source code of the app into the container folder
COPY . .

# Expose network port number
EXPOSE 3002

# Start the application
CMD ["npm", "start"]