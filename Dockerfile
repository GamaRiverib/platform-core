FROM node:10.17.0-alpine

WORKDIR /usr/src/app/core

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