var orm = require("../config/orm.js");

let burger = {
  selectAll: function(cb) {
    orm.selectAll(cb);
  },
  create: function(burger, cb) {
    orm.create(burger, cb);
  },
  update: function(id, cb) {
    orm.update(id, cb);
  },
  delete: function(id, cb) {
    orm.delete(id, cb);
  }
};

module.exports = burger;
