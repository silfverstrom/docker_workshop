# Exercise 5 

In this exercise we are going to build a multi stage image, with a stage for running testing

We are going to split up the Dockerfile we used in ex3 into a test and run
stage.

Our goal is to be able to build only the test stage and only the build stage of
the application, but add all common dependencies as a base stage.

When we're ddone we should be able to run:

```
docker build -t test --target test
docker build -t test --target build
```

The test stage should run the test-file with ```npm run test```

To build a multi stage build we will use the as keyword. It could look
something like this:

```
FROM ubuntu AS base
...

FROM base AS test
...

FROM base AS build
...
```

