FROM node:10-alpine



RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Permissions
RUN chown -R node /home/node/app

RUN npm install
RUN npm i config --save
# If you are building your code for production
RUN npm ci --only=production

# Bundle app sources
COPY . .
RUN chown node:node ./
USER node

EXPOSE 8080
CMD [ "node", "./bin/www.js" ]
