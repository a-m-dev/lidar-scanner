FROM node:22-alpine
WORKDIR /usr/app

RUN npm i -g pnpm

COPY ./ ./
RUN npm i

CMD [ "pnpm", "dev" ]