FROM node:14

WORKDIR /usr/app
COPY package*.json ./
RUN npm install

# copy the app
COPY . .

# run on port 8888
EXPOSE 8888

# start server
CMD ["node", "app.js"]