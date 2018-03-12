# docker-oe117-odbc-nuxt

Example of using OpenEdge 11.7 ODBC with Nuxt.js

## Docker Commands

### Install build tools

```bash
npm install --global --production windows-build-tools
```

### Build

```bash
docker build -t sequelize-odbc-openedge:latest .
```

### Run

```bash
 docker run -it -p 30000:30000 sequelize-odbc-openedge:latest
```

### Run with bash

```bash
docker run -it sequelize-odbc-openedge:latest bash
```
