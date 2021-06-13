# Exercise 1

In these exercises we will try starting a container and connecting to it.

# 1.1 Running a container

In this first exercise we will start a container and name it.

Goal:

Start a container from the image ubuntu:latest in interactive mode.

Commands you will use

* docker run ubuntu:latest bash

Try using a combination of the following arguments to  run
* -d # Run in background mode
* -it # Interactive
* --name <name> # gives the container a name

When you're done - run 

* docker ps

You should now see your container

# 1.2 - Remove the container

Stop and remove your container using the following commands

```
docker stop <container>
docker rm <container>
```

# 1.3 - Check log output from a container

Start a new container using the ubuntu image

Run the following argumnet as default

```
/bin/sh -c  "while true; do echo hello world; sleep 1; done"
```

Now try and look at the log files from the container using

```
docker logs <container_name>
```


# 1.4 - Attach to a running container

Attach to a running container using the following commands

```
docker exec -it <container_name> <command>
```

As command, try using ```bash``` to get a shell.


# 1.5 - make a local change, and save the image

Attach to a running container and make a local change in the container.
As an example echo the following to tmp

```
echo "testchange" > /tmp/test
```

Now exit the container and commit the changes

```
docker commit <name> <image_name>
```

You should now be able to see an image with <image_name> if you run

```
docker images
```

Try and create a new container using your saved image.
Is your local change available in your new container?
