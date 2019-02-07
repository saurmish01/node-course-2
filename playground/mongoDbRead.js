//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var objid = new ObjectID();
console.log(objid);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){ 
  return console.log('Unable to connect to db server');
}
console.log('Connected to db');
const db = client.db('TodoApp');

db.collection('Users').find({name: 'saurabh'}).toArray().then((docs) => {
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('something went wrong!');
});
  client.close();
});
