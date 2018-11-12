FROM node:10-alpine

WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
# RUN npm t -- --coverage && mv coverage /public
RUN npm t -- --coverage
RUN npm run docs && mv site /public
