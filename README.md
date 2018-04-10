# docker-oe117-odbc-nuxt

Example of using OpenEdge 11.7 ODBC with Nuxt.js

## Docker Commands

### Install build tools

```bash
npm install --global --production windows-build-tools
```

### Build

```bash
docker build -t docker-oe117-odbc-nuxt:latest .
```

### Run

```bash
 docker run -it -p 30000:30000 docker-oe117-odbc-nuxt:latest
```

### Run with bash

```bash
docker run -it docker-oe117-odbc-nuxt:latest bash
```

- - -

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

