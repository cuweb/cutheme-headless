FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package.json yarn.lock ./

# Yarn Install
RUN yarn install --immutable --immutable-cache --check-cache --ignore-scripts

# Bundle app source
COPY . .

# Next Build
RUN yarn run prodbuild

EXPOSE 3000
CMD [ "yarn", "run", "start" ]