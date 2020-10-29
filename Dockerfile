FROM node:latest
RUN mkdir -p /node
ADD . /node
WORKDIR /node
RUN npm install
CMD ["npm","start"]
