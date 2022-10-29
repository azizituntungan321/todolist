FROM node:alpine AS development
EXPOSE 3030/tcp
WORKDIR /srv/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install --only=development
COPY . .
RUN npm run build

FROM node:alpine as production
EXPOSE 3030/tcp
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
CMD ["npm", "run", "start:prod"]