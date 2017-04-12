var Todo=require('../models/todo');
var User=require('../models/user');

var sendJsonResponse = function(res,status,content){
    res.status(status);
    res.json(content);
};

module.exports.createTodo = function(req,res){
    var todo = new Todo({
        text:req.body.text
    });

    todo.save().then(function(doc) {
        sendJsonResponse(res,200,doc);
    }, function(e){
        sendJsonResponse(res,400,e);
    });
};

module.exports.getTodos = function(req,res){
   var todo=Todo.find().then(function(result){
       sendJsonResponse(res,200,{result});
   }, function(e){
       sendJsonResponse(res,400,e);
   });
};