FROM node:12

WORKDIR /app

RUN npm i -g serverless sequelize-cli

COPY package*.json ./

RUN npm i

EXPOSE 3000

COPY . /app/