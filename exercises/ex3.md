# Exercise 3

In this exercise we will build our own docker images that starts a simple http server.

## 3.1 - Write the docker file

You can find all the code for the node server in the exercise-3 folder. It is in this directory you will create your docker file.

The server is built using node so a good base image is `node:latest`, which comes packaged with everything we need.

After that you need to add the files in exercise-3 directory to your docker image. You can do that by either using `ADD` or `COPY`.

To install the dependency for the server you need to run `npm install .` in the directory where you copied your files.

The server listens to traffic on port 3000 soo don't forget to expose that port.

After that the only step left is to start the server, you do that with `node index.js`.

## 3.2 - Build and run

Now it is time to build your docker image which is done with the `docker build` command and you can tag your image with the `-t` argument. For example:
`docker build -t node_server .`

Now the only step left is to run the your image which you do with the `docker run` command. Dont forget that the server listens to traffic on port 3000 which means that you will need publish that port.

`docker run -p 3000:3000 node_server`

You can then go to localhost:3000 in your browser and if everything is working you should see a message from the server
