const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
if(err){
  return console.log('Unable to connect to db server');
}
console.log('Connected to db');
const db = client.db('TodoApp');

db.collection('Users').deleteMany({name: 'saurabh'}).then((result) => {
  console.log(result);
});
//similar for deleteOne


client.close();
});
