# Dockerfile
FROM ubuntu AS base
RUN apt-get update
RUN mkdir /niklas

FROM base AS stage2
RUN apt-get install mongodb

FROM base AS stage3
RUN mkdir /test

FROM base AS test
RUN npm run test

