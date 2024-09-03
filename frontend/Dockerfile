# create a new image from the base image
FROM node:18-alpine

# set working directory
WORKDIR /app


COPY . . 
RUN rm -rf node_modules

# install dependencies
RUN npm install

# Render production build
RUN npm run build

# list contents of /app directory
# RUN ls /app

# expose port 3000
EXPOSE 3000

# run the application

CMD ["npm", "run", "start"]