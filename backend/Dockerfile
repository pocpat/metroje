# get an OS to run my api
FROM node:18-alpine

WORKDIR /app

COPY package-lock.json ./

# install dependencies
RUN npm install

# install node
COPY . /app

# build my api
RUN npm run build

EXPOSE 8080

# run my api
CMD ["npm", "start"]
