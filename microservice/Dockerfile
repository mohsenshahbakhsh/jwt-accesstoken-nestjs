FROM node:14-alpine
RUN mkdir /usr/local/app
WORKDIR /usr/local/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run","start:debug"]
