FROM ubuntu
RUN npm install
CMD ["npm","start","-n"]
