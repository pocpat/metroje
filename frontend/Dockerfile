#  create a new image from the base image

FROM node:18-alpine

# set working directory
WORKDIR /app

# copy the package.json file into the working directory
COPY dist /app
COPY package.json /app
COPY index.html /app/dist
# install dependencies
RUN npm install

# expose port 3000
EXPOSE 3000

# run the application
CMD ["npx", "serve", "dist"]