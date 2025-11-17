FROM alpine:3.19

RUN apk update && apk add --no-cache \
      php83 \
      php83-session \
      php83-mysqli \
      php83-pdo_mysql \
      wget

WORKDIR /var/www/html

RUN wget "https://www.adminer.org/latest.php" -O adminer.php

EXPOSE 8080

CMD ["php83", "-S", "0.0.0.0:8080", "-t", "/var/www/html", "adminer.php"]
