# Exercise 2

In these exercises we will look into networking and volumes.

# 2.1 Create a new bridge network

Try to create a new network

```
docker network create test-net
```

When you are done, verify that the network exists with ```docker network ls```


# 2.2 Connect a container to your network

Start two containers and connect them to your network

```
docker run -d -it --name c1 --network <network_name> ubuntu
docker run -d -it --name c2 --network <network_name> ubuntu
```

Some headsup: Ping is not installed as default in ubuntu.
If you want to try and ping the containers run the following in your ubuntu container.

```
apt-get update
apt-get install iputils-ping
```

These containers will now be able to reach each other

# 2.3 Disconnect a container

Disconnect one of your containers from the network using the following command

```
docker network disconnect <network_name> <container_name>
```

# 2.4 Create a volume

Create a new volume by using the command

```
docker volume create <vol_name>
```

Then list all volumes and verify that it exists

```
docker volume ls
```

# 2.5 Create container attached to volume

Start a new container, attach it to your volume.

```
 --mount source=<vol_name>,target=<target>
```

Attach to the container and verify that the target directory exists.

# 2.6 Make a local change

Make a local change in the <target> direcoty of your created volume.
After you've made the local change, stop and kill the container.

After this, create a new container and attach it to your previous volume.
The local change should still be available.
