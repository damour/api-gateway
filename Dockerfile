FROM node:7.7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 8080

ARG NODE=production
ENV NODE_ENV ${NODE}

CMD [ "npm", "run", "serve" ]
