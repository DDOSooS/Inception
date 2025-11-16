#!/bin/bash

DATADIR="/var/lib/mysql"

if [ ! -d "$DATADIR/mysql" ]; then
    echo "Initializing database in $DATADIR..."
    mariadb-install-db --user=mysql --datadir=$DATADIR
    echo "Database initialized."
    
    cat > /tmp/init.sql <<-EOSQL
        CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;
        CREATE USER IF NOT EXISTS '${DB_USER}'@'%' IDENTIFIED BY '${DB_PASSWORD}';
        GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'%';
        FLUSH PRIVILEGES;
EOSQL
    
    echo "Starting MariaDB server with initialization..."
    exec mysqld_safe --user=mysql --datadir="$DATADIR" --bind-address=0.0.0.0 --init-file=/tmp/init.sql
else
    echo "Database already present in $DATADIR, skipping initialization."
    echo "Starting MariaDB server..."
    exec mysqld_safe --user=mysql --datadir="$DATADIR" --bind-address=0.0.0.0
fi