//import orm
var orm = require("../config/orm")

//create burger variable
var burger = {
    selectAll: function (table, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (table, cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (table, value, condition, cb) {
        orm.updateOne("burgers", value, condition, function (res) {
            cb(res);
        });
    },
};

//export burgers
module.exports = burger;