//import express, router and burger model
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//create routes and logic
router.get("/", function (req, res){
    burger.selectAll("burgers", function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res){
    burger.insertOne("burgers", ["burger_name", "devoured"], //the names of cols to insert into 
    [req.body.burger_name, req.body.devoured], function(result){ //what you want to insert
        //send back id of new burger
        res.json({id: result.insertId});
        //reload page
    });
});

router.put("/api/burgers/:id", function (req, res){
    var condition = "id = " + req.params.id;
    
    burger.updateOne("burgers", {
        devoured: req.body.devoured
      }, condition, function (result){
        if (result.changedRows == 0){
            //the burger must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export router
module.exports = router;