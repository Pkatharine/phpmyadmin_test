var mysql = require("mysql");
class Database {

    async connect(databaseName) {
        this.databasename = databaseName;
        this.connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: null,
        database: databaseName
    });
    this.connection.connect(function(err) {
      if (err) {
        console.log(err.code);
        console.log(err.fatal);
      }
    });
  }

  async deleteDb() {
    var $query = "drop database "+this.databasename;
    this.connection.query($query, function(err, rows, fields) {
      if (err) {
        console.log("An error ocurred performing the query.");
        return;
      }
      console.log("Query succesfully executed");
    });
  }

  async endConnection(){
    this.connection.end(function(){
    });
  }
}

module.exports = Database;