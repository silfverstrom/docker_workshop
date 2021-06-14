FROM node:latest

WORKDIR /app

ADD index.js .
ADD package.json .

RUN npm install .

CMD node index.js
#CMD tail -f /dev/null
