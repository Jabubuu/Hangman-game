FROM node:12-alpine
RUN mkdir -p /node
ADD . /node
WORKDIR /node
RUN npm install expo-cli --global
