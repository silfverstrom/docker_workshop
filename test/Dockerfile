FROM ubuntu as base
RUN apt-get update && apt-get install mongo && npm install

FROM base as test
RUN npm run test

FROM base as build
RUN node server.js

