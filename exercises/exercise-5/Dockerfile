FROM node:latest as base

WORKDIR /app

ADD package.json .
ADD *.js .

from base as test
RUN npm run test

from base as build
RUN npm install .

EXPOSE 3000

CMD node index.js
