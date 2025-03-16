## Note, the site is plain PHP for now, so skipping Composer/Node install portions.

# Build: Final image, without unneeded components
# Base image from https://github.com/wyveo/nginx-php-fpm, 2022-03-22
FROM wyveo/nginx-php-fpm:php81

# Note: wyveo/nginx-php-fpm uses /usr/share/nginx/html/ as the web root. Symlink to /var/www
# RUN ln -nsf /usr/share/nginx/html/ /var/www
# Copy application code in local dir to the final image
COPY . /var/www

# Kubernetes secrets will fill in certain ENV values
COPY ./deployment/docker.env /var/www/.env
COPY ./deployment/docker.nginx.conf /etc/nginx/conf.d/partavate.conf
RUN rm -rf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /var/www/
