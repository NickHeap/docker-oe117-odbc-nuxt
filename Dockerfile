FROM docker-node-odbc:latest as deps

# needed to compile odbc
RUN apt-get update
RUN apt-get install -y unixodbc unixodbc-dev

WORKDIR /usr/src/app

# load dependencies
COPY package*.json ./
RUN npm install

#######################################
FROM docker-node-odbc:latest

# create a dir for the app
WORKDIR /usr/src/app

COPY --from=deps /usr/lib/x86_64-linux-gnu/libodbc* /usr/lib/x86_64-linux-gnu/
COPY --from=deps /usr/lib/x86_64-linux-gnu/odbc/ /usr/lib/x86_64-linux-gnu/odbc/

# copy dependencies
COPY --from=deps /usr/src/app/node_modules/ node_modules
COPY package*.json ./
COPY nuxt.config.js ./
COPY src/test_unix.js ./

# add pages and server
COPY pages/ /usr/src/app/pages/
COPY server/ /usr/src/app/server/

# allow content to be overridden
VOLUME /usr/src/app/pages
VOLUME /usr/src/app/server

EXPOSE 30000

CMD [ "npm", "run", "dev" ]
