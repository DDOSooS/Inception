#!/bin/sh
set -e

echo "Waiting for database on mariadb:${MARIADB_PORT:-3306}..."
until nc -z "${DB_HOST}" "${MARIADB_PORT:-3306}"; do
    echo "Database not ready, sleeping 2s..."
    sleep 2
done
echo "Database is ready!"

sleep 3

cd /var/www/html

if [ ! -f wp-config.php ]; then
    echo "WordPress is being set up..."

    curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
    chmod +x wp-cli.phar
    
    echo "Downloading WordPress core..."
    ./wp-cli.phar core download --allow-root

    echo "Creating wp-config.php..."
    ./wp-cli.phar config create \
        --dbname="${DB_NAME}" \
        --dbuser="${DB_USER}" \
        --dbpass="${DB_PASSWORD}" \
        --dbhost="${DB_HOST}" \
        --allow-root

    echo "Injecting SSL_DISABLED fix..."
    echo "define( 'MYSQL_SSL_TYPE', 'DISABLED' );" >> wp-config.php

    echo "Installing WordPress..."
    ./wp-cli.phar core install \
        --url="${URL}" \
        --title="${WP_TITLE}" \
        --admin_user="${ADMIN_USER}" \
        --admin_password="${ADMIN_PASSWORD}" \
        --admin_email="${ADMIN_EMAIL}" \
        --allow-root

    echo "Creating editor user..."
    ./wp-cli.phar user create "${EDITOR_USER}" "${EDITOR_EMAIL}" \
        --role=editor \
        --user_pass="${EDITOR_PASSWORD}" \
        --allow-root || true
else
    echo "WordPress is already set up."
fi

echo "Setting permissions..."
chown -R nobody:nobody /var/www/html

echo "Starting PHP-FPM..."
exec php-fpm83 -F