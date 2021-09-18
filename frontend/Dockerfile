# Get node image
FROM node:latest

# Create new folder for frontend app files
RUN mkdir -p /usr/src/frontend-app

# Set working directory in the container
WORKDIR /usr/src/frontend-app

# Copy package.json file from project source folder to container folder
COPY package.json /usr/src/frontend-app

# Install dependencies inside of the container
RUN npm install

# Copy source code of the app into the container folder
COPY . /usr/src/frontend-app

# Expose network port number
EXPOSE 3000

# Start the application
CMD ["npm", "start"]