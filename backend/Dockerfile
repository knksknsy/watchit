FROM node:7

#Create app Directory
RUN mkdir -p /usr/src/app

# Install app dependencies
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
