FROM node:10-alpine

# Create app directory
WORKDIR /home/node

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /home/node

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /home/node

EXPOSE 3000
CMD [ "node", "./bin/www.js" ]