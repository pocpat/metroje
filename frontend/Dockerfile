#  create a new image from the base image

FROM node:18-alpine

# set working directory
WORKDIR /app

# copy the package.json file into the working directory
COPY package.json /app

# install dependencies
RUN npm install

# expose port 3001
EXPOSE 3001

# run the application
CMD ["npx", "serve", "dist"]