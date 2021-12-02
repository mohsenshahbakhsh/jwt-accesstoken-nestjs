FROM node:14.7.0-alpine
RUN npm install -g npm@7.14.0
RUN mkdir /usr/local/app
WORKDIR /usr/local/app
COPY package.json .
RUN npm install
RUN apk update && apk add bash
COPY . .
CMD ["npm", "run","start:debug"]
