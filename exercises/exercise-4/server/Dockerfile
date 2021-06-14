FROM node:latest

WORKDIR /app

ADD index.js .
ADD package.json .

RUN npm install .

EXPOSE 3000

CMD node index.js
