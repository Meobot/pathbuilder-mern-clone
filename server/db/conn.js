const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
	connectToServer: function (callback) {
	  client.connect().then(function (db) {
		if (db) {
		  _db = db.db("sample-weatherdata");
		  console.log("Successfully connected to MongoDB."); 
		  console.log(_db)
		}
		return callback(null);
	  }).catch(function (err) {
		return callback(err);
	  });
	},
  
	getDb: function () {
	  return _db;
	},
  };
  