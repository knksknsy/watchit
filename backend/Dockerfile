FROM node:latest

#Create app Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

#Bundle app Source
COPY . /usr/src/app

EXPOSE 3000

CMD ["node", "app.js"]
