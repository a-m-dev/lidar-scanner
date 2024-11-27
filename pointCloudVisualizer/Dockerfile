FROM node:22-alpine

WORKDIR /usr/app

RUN npm i -g pnpm 

COPY ./package.json ./

RUN pnpm i

COPY ./ ./

CMD [ "pnpm", "dev", "--host" ]