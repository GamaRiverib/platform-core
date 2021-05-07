FROM node:10.17.0-alpine

WORKDIR /usr/src/app/core

RUN apk add --update git

RUN npm i typescript -g

COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./src ./src

RUN npm i && \
    npm run build && \
    rm -rf node_modules && \
    rm -rf src && \
    rm tsconfig.json && \
    npm i --only=prod && \
    rm package-lock.json

RUN apk del git && \
    rm -rf /var/cache/apk/*

RUN npm uninstall typescript -g

# COPY ./openapi.yaml ./build/openapi.yaml

# /usr/src/app/tax-calculator-service/data/
#
# VOLUME ["/usr/src/app/tax-calculator-service/logs", "/usr/src/app/tax-calculator-service/data"]

CMD ["node", "build/index.js"]