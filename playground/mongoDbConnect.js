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

db.collection('Users').find().toArray().then((docs) => {
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
  console.log('something went wrong!');
});


// db.collection('Todos').insertOne({
//   text: 'something to add',
//   completed : false
// }, (err, result) => {
//   if (err){
//     return console.log('Unable to insert todo',err);
//   }
//
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
//   name: 'saurabh',
//   age : 26
// }, (err, result) => {
//   if (err){
//     return console.log('Unable to insert user',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

  client.close();
});
