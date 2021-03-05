FROM node:14

WORKDIR /usr/app
COPY package*.json ./
RUN npm install

# copy the app
COPY . .

# start server
CMD ["node", "app.js"]