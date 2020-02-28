var connection = require("../config/connection.js");

let orm = {
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  create: function(burger, cb) {
    connection.query(
      "INSERT INTO burgers (burger_name) VALUES(?)",
      [burger],
      (err, resp) => {
        if (err) throw err;
        cb(resp);
      }
    );
  },

  update: function(id, cb) {
    connection.query(
      "UPDATE burgers SET devoured = 1  WHERE id = ?",
      [id],
      (err, resp) => {
        if (err) throw err;
        cb(resp);
      }
    );
  },
  delete: function(id, cb) {
    connection.query("DELETE FROM burgers WHERE id = ?", [id], (err, resp) => {
      if (err) throw err;
      cb(resp);
    });
  }
};

module.exports = orm;
