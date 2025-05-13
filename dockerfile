# Use official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the other files to the container
COPY . .

# Expose the port that your app will run on
EXPOSE 3000

# Command to start your app
CMD ["node", "index.js"]
