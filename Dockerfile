FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .  .
EXPOSE 7777
CMD ["npm", "start"]

