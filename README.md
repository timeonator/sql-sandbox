# sql-sandbox

#
## Authorization Problem with connecting to mysql 8 with node
I had problems autorizing from node. Ended up using the following:
...
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY "";
flush privileges
...
see https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
