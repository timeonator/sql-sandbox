# sql-sandbox

 A space for working out sql and backend kinks, sql-sandbox is just a bench in the code shop. There are no deliverables and nothing of interest to anybody but me within.

#
## Authorization Problem Connecting to mysql 8 with Node
I had problems autorizing from node. Ended up using the following:

    ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY "";
    flush privileges

    using mysql shell from oractle I used alter user root@localhost identified with mysql_native_password by '<password>'
see https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
