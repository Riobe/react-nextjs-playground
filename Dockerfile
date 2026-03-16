FROM node:24.14-slim

WORKDIR /app

COPY .env.local .env.local

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "container:start"]

