FROM node:16.13

WORKDIR /usr/local/user

ENV PORT=4002

COPY package.json package-lock.json ./

RUN npm install && npm cache clean --force

COPY ./ ./

RUN npm install -g nodemon

CMD ["npm", "run", "start"]
