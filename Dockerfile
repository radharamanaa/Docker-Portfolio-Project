FROM nginx:1.27.1

WORKDIR /app

COPY dist /app
# COPY ./dist/assets/* /app/assets/*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# COPY ./site-certis/* /app/abhijeettheengineerdotcom/*

RUN ls -l /app

HEALTHCHECK CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]