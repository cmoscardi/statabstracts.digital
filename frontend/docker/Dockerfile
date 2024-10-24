FROM node:latest

RUN mkdir /deps
ADD ./app/package.json /deps
WORKDIR /deps
RUN npm install
