FROM alpine

WORKDIR /var/www/localhost/catia/

EXPOSE 99

ADD nginx/default.conf /etc/nginx/conf.d/default.conf

COPY . /var/www/localhost/catia/client

RUN apk add nginx && \
    mkdir /run/nginx && \
    apk add nodejs && \
    apk add npm && \
    npm cache clean --force && \
    cd /var/www/localhost/catia/client && \
    npm install && \
    npm run build && \
    mv /var/www/localhost/catia/client/build/* /var/www/localhost/catia && \
    rm -rf /var/www/localhost/catia/client


CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]