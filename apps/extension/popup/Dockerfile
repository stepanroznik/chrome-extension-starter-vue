FROM nginx:1.23-alpine

ENV BACKEND_API_ENDPOINT="/api"

RUN rm /etc/nginx/conf.d/default.conf
COPY ./apps/frontend/nginx.conf /etc/nginx/templates/default.conf.template

COPY ./dist/apps/frontend/ ./usr/share/nginx/html

