var express = require('express');
var router = express.Router();
var todoController= require('../controllers/todoController');


router.post('/todos/create', todoController.createTodo);
router.get('/todos',todoController.getTodos);

module.exports = router;
