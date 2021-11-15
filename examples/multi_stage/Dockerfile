FROM node:10-alpine as nodebuild    # Define the base image
WORKDIR /app                        # Define where we put the files
COPY . .                            # Copy all files from local host folder to image
RUN npm install && \                # Install dependencies
    npm run build && \              # Build the solution
    npm run test && \               # Run the tests
    npm run coverage                # Report on coverage

FROM node:10-alpine as noderun      # Define base image
WORKDIR /app                        # Define work directory
COPY --from=nodebuild /app/dist/src/ ./ # Copy binaries resulting from stage build
COPY package*.json ./               # Copy dependency registry
RUN npm install --only=prod         # Install only production dependencies
EXPOSE 8000
ENTRYPOINT node /app/index.js       # Define how to start the app.
