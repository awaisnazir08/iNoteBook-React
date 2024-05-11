# Use a base image with Node.js pre-installed
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory

# Install dependencies
# RUN npm install

# Copy the rest of the application code
COPY . /app

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "run", "both"]
