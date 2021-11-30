FROM node:14-alpine
RUN mkdir /usr/local/app
WORKDIR /usr/local/app
COPY . .
RUN npm install
CMD ["npm", "run","start:debug"]
