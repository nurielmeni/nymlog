// use 
// Run this in the container to create the user for the DB
//use nymlog

db.createUser({
  user: "root",
  pwd: "nymlog",
  roles: [
    { role: "userAdmin", db: "nymlog" },
    { role: "dbAdmin",   db: "nymlog" },
    { role: "readWrite", db: "nymlog" }
  ]
});