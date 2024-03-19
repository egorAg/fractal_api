FROM node:latest

WORKDIR /home/node/app

COPY . ./

RUN npm i -g react

RUN yarn

CMD [ "yarn", "start" ]