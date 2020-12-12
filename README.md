# Description

Search into a sql dump file (\*.sql) to extract an insert statement based on the table and a regexp.
You can also specify a gz file.

# Install

Go into a node project and type the following :

    $> npm install -g mysqldumpfind

# Usage

    mysqldumpfind <file> <table> <regexp>

# Exemple

extract id "55200" from table "user" in file "exemple.sql"

    $ mysqldumpfind exemple.sql user 55200
    (55200,'admin','rafi.piccolo@gmail.com','raphael','piccolo')
