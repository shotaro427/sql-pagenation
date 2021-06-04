FROM node:13.7

RUN npm i -g @nestjs/cli
ENV TZ Asia/Tokyo

WORKDIR /nest
COPY package*.json /nest/

RUN yarn
CMD [ "yarn", "start:dev"]