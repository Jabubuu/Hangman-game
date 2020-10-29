FROM node:latest
RUN mkdir -p /node
ADD . /node
WORKDIR /node
RUN npm install --global expo-cli
CMD ["npm","start"]
