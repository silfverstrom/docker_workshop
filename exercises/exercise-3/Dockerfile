FROM node:latest

WORKDIR /app

ADD package.json .
ADD index.js .

RUN npm install .

EXPOSE 3000

CMD node index.js
