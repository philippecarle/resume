FROM alpine:latest

RUN apk update \
 && apk add jq \
    inotify-tools \
    moreutils \
 && rm -rf /var/cache/apk/*

RUN mkdir /usr/app
WORKDIR /usr/app