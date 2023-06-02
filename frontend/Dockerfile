# create a new image from the base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# copy the package.json file into the working directory
COPY dist /app
COPY package**.json /app
# COPY index.html /app/dist
# COPY src /app/src
# COPY node_modules /app/node_modules

# install dependencies
RUN npm install

# list contents of /app directory
# RUN ls /app

# expose port 3000
EXPOSE 3000

# run the application
CMD ["npm", "start"]