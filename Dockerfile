FROM node:14.17.6-alpine

WORKDIR /boilerplate

ENV NODE_ENV=development

COPY .env ./
COPY index.ts ./
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src

RUN yarn install

CMD [ "yarn", "start" ]
