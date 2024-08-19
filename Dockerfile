FROM node:20.16-alpine3.20

LABEL authors="helamanb"

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json .

USER node

RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node . .

EXPOSE 5000

CMD ["node", "src/index.js"]