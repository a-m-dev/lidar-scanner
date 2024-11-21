FROM node:22-alpine
WORKDIR /usr/app
RUN npm i -g pnpm
COPY ./package.json ./
COPY ./ ./
RUN pnpm i

CMD [ "pnpm", "dev" ]