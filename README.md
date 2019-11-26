# Description

Search into a sql dump file (*.sql) to extract an insert statement based on the table and a regexp

# Install

Go into a node project and type the following :

    $> npm install mysqldumpfind

or launch it directly without installing :

    $> npx mysqldumpfind file table search

# Usage

    node mysqldumpfind <file> <table> <regexp

# Exemple

extract id "55200" from table "user" in file "exemple.sql"

    $ node index.js exemple.sql user 55200
    (55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')
