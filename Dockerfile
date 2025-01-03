FROM node:slim

WORKDIR /usr/src/app
ENV WELCOME_MESSAGE="Hello World this is a Dockerize Node.js App"
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 4000

CMD [ "yarn", "start" ]