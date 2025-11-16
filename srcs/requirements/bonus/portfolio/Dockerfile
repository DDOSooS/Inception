FROM alpine:3.22

RUN apk update && \
    apk add --no-cache nodejs npm && \
    rm -rf /var/cache/apk/*

WORKDIR /usr/src/app

COPY ./tools/package*.json ./

RUN npm install

COPY ./tools/ .

EXPOSE 3000

CMD ["npm", "run", "dev"]