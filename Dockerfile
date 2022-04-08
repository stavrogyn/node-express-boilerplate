FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

COPY . .

RUN yarn install

CMD [ "yarn", "start" ]