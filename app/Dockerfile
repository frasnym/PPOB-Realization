FROM node:14.16.0-alpine3.10
WORKDIR /app
COPY /app/package.json .
RUN npm install
COPY /app .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
