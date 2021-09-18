# Get node image
FROM node:latest

# Create new folder for backend app files
RUN mkdir -p /usr/src/backend-app

# Set working directory in the container
WORKDIR /usr/src/backend-app

# Copy package.json file from project source folder to container folder
COPY package.json /usr/src/backend-app

# Install dependencies inside of the container
RUN npm install

# Copy source code of the app into the container folder
COPY . /usr/src/backend-app

# Expose network port number
EXPOSE 3002

# Start the application
CMD ["npm", "start"]