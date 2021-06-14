# Exercise 4

In this exercise we will use docker-compose to start multiple docker containers.

## 4.1 - starting a single service

As a first step you will build and start at single service. Start by creating your `docker-compose.yml` file in the `exercise-4` directory. Use docker compose version 3.9.

Lets start with defining our first service, lets call it `server`. As you can see there two other sub directories in the `exercise-4` folder, you only need to focus on the folder called `server` for now. In this folder there is `Dockerfile` which builds the server, so you will need to point the `build` attribute of the service to this folder.

Now if you look in the Dockerfile in `./server` you will see `EXPOSE 3000` which tells us that we will need to expose port 3000 for this service. We can to this with `ports:` and then listing which host port you want to map to the service port. For example you would write `8000:3000` to map port 8000 on your host machine to port 3000 in the service.

The last step is to start our service which you do with

`docker-compose up --build`

If everything works you should be able to reach the service from your host machine.

## 4.2 - networks and adding a second service

Now lets add a second services that sends requests to the first service and connect them to the same network. You can find the dockerfile for this service in the `sender` directory, so create a second service in your `docker-compose.yml` file and point the build attribute to that directory.

Let's also create a new network that our services will be connected. To create a network you add `networks:` section under your `services` where you define your networks. For example to create a network called `central`:

```
networks:
  central:
```

There are alot of options for networks, but we will only use the defaults so we can leave it empty.

To connect a service to your network you need to list the network name in the `networks` attribute for the service. So we will need to do that for both the server and the sender service. After that try launching your services with
`docker-compose up --build`
and you should see the sender making requests to the server.

### Extra

You can remove the `ports` section of the server services. This will make it impossible for you to reach the server service from the host machine, but the sender will still be able to reach it.

## 4.3 - shared volumes

Now we are going to add a volume to our services. Let's start by creating the volume, we do this by adding by adding a `volumes` section, similar to how we added a network. We will be using the default settings, so all you need to name your volume. Example:

`volumes: cool_volume:`

The next step is to mount the volume to one of the services, this is done by specifing to which directory you want the volume to mount to for a given services. For exampel adding this to a service would add the volume we created earlier to folder `volume-data` in the root.

```
volumes:
- type: volume
  source: cool-volume
  target: /volume-data
```

After you have done this start your cluster and make sure everything is working. Then run `docker ps` to get a list of all docker instances runing on your machine and find the name of the service you mounted the volume to.

When you got the name of the container, start bash in it using

`docker exec -it NAME_OF_CONTAINER bash`

and navigate to the folder you mounted the volume to. If you run `ls` in the folder, it should be empty. Not lets create a file by running `echo "hello" > test.txt`.

Then stop all containers and start them again. Then start bash in the container again and navigate to the folder with the volume data. If you run `ls` this time you should a file named `test.txt`.
