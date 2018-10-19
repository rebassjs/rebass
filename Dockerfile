FROM node:10-alpine

WORKDIR /usr/src

COPY . .
RUN npm ci

RUN npm t -- --coverage && mv coverage /public
