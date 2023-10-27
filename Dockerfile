# Use Ubuntu as the base image
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /app

# Update the package list and install required dependencies
RUN apt-get update && \
    apt-get install -y curl gcc

# Install Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y


# Add Rust binaries to PATH
ENV PATH="/root/.cargo/bin:${PATH}"

RUN curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh


# Install Node.js and npm
RUN apt-get install -y nodejs npm


# Copy the project files to the container
COPY . .

## Run the Rust project
#RUN  wasm-pack build


# Navigate to the www folder and install npm dependencies
WORKDIR /app/www
RUN npm install

# Expose the port your Node.js app will run on
EXPOSE 3000

# Run npm start
CMD ["npm", "start"]
